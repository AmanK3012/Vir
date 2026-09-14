import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { z } from 'zod';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';

// ==========================================================
// 1. Security Headers (Helmet with Custom CSP)
// ==========================================================
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
        imgSrc: [
          "'self'",
          "data:",
          "blob:",
          "https://images.unsplash.com"
        ],
        connectSrc: [
          "'self'",
          process.env.SUPABASE_URL ? process.env.SUPABASE_URL : ""
        ].filter(Boolean),
        frameSrc: ["'none'"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: isProduction ? [] : null
      }
    },
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" }
  })
);

// ==========================================================
// 2. Strict CORS Configuration
// ==========================================================
const configuredFrontend = process.env.FRONTEND_URL;
const allowedOrigins = [
  configuredFrontend,
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173'
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or same-origin in production)
      if (!origin || allowedOrigins.includes(origin) || (!isProduction && origin.includes('localhost'))) {
        callback(null, true);
      } else {
        callback(new Error('CORS policy: Access from this origin is not allowed.'));
      }
    },
    methods: ['GET', 'POST', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 86400
  })
);

// ==========================================================
// 3. Body Size Limits
// ==========================================================
app.use(express.json({ limit: '32kb' }));
app.use(express.urlencoded({ extended: true, limit: '32kb' }));

// ==========================================================
// 4. Rate Limiting
// ==========================================================
// Public submission rate limiter: 10 requests per 15 minutes per IP
const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this IP. Please try again later.'
  }
});

// Admin endpoints rate limiter: 300 requests per 15 minutes per IP
const adminLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false
});

// ==========================================================
// 5. Server-Side Supabase Client (Service Role Only)
// ==========================================================
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let supabase = null;
if (supabaseUrl && supabaseServiceRoleKey && !supabaseUrl.includes('placeholder')) {
  supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
  console.log('✅ Supabase server client initialized with service-role security');
} else {
  console.warn('⚠️ SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY not configured. Running in secure fallback mode.');
}

// ==========================================================
// 6. Resend Email Client
// ==========================================================
const resendApiKey = process.env.RESEND_API_KEY;
let resend = null;
if (resendApiKey && resendApiKey.startsWith('re_') && !resendApiKey.includes('placeholder')) {
  resend = new Resend(resendApiKey);
  console.log('✅ Resend API client initialized');
} else {
  console.warn('⚠️ RESEND_API_KEY not configured. Email notifications running in mock mode.');
}

const TO_EMAIL = process.env.TO_EMAIL || 'sales@virpackaging.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'Vir Engineers <onboarding@resend.dev>';

// ==========================================================
// 7. Security Helpers (HTML Escaping & PostgREST Sanitizer)
// ==========================================================
const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const sanitizeSearchParam = (param = '') => {
  // Strip control characters, quotes, commas, parentheses, and PostgREST operator tokens
  return String(param)
    .trim()
    .slice(0, 100)
    .replace(/[%,()":.\\]/g, '');
};

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// ==========================================================
// 8. Server-Side Zod Schemas
// ==========================================================
const enquirySchema = z.object({
  fullName: z.string().trim().min(2, 'Full name is required').max(100),
  companyName: z.string().trim().min(2, 'Company name is required').max(150),
  email: z.string().trim().email('Invalid email address format').max(254),
  phone: z.string().trim().min(7, 'Invalid phone number').max(20),
  productInterest: z.string().trim().max(150).optional(),
  productName: z.string().trim().max(150).optional(),
  quantity: z.string().trim().max(100).optional(),
  projectDetails: z.string().trim().max(5000).optional(),
  message: z.string().trim().max(5000).optional(),
  type: z.enum(['contact', 'quote']).default('contact')
});

// ==========================================================
// 9. Admin Authentication & Authorization Middleware
// ==========================================================
const requireAdminAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Missing or malformed authentication token'
      });
    }

    const token = authHeader.split(' ')[1];
    if (!token || token.length < 10) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Invalid token format'
      });
    }

    if (!supabase) {
      return res.status(503).json({
        success: false,
        message: 'Service unavailable: Authentication backend not initialized'
      });
    }

    // Step 1: Verify user authentication with Supabase
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !user) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Invalid or expired token'
      });
    }

    // Step 2: Verify role authorization in admin_users table
    const { data: adminProfile, error: dbError } = await supabase
      .from('admin_users')
      .select('user_id, role, active')
      .eq('user_id', user.id)
      .eq('active', true)
      .maybeSingle();

    if (dbError) {
      console.error('❌ Error verifying admin role in admin_users:', dbError.message);
      return res.status(500).json({
        success: false,
        message: 'Internal authorization error'
      });
    }

    if (!adminProfile || !['admin', 'manager'].includes(adminProfile.role)) {
      return res.status(403).json({
        success: false,
        message: 'Forbidden: Insufficient administrative privileges'
      });
    }

    // Attach verified user and admin profile to request
    req.user = user;
    req.admin = adminProfile;
    next();
  } catch (err) {
    console.error('❌ Exception in requireAdminAuth middleware:', err);
    return res.status(401).json({
      success: false,
      message: 'Authentication failed'
    });
  }
};

// ==========================================================
// 10. API Routes
// ==========================================================

// Root Endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'Vir Engineers API',
    status: 'online'
  });
});

// Generic Public Health Check (Does NOT leak infrastructure details)
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok'
  });
});

// Protected Internal Diagnostic Health Check
app.get('/api/admin/health', requireAdminAuth, (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    services: {
      supabase: supabase ? 'connected' : 'unconfigured',
      resend: resend ? 'connected' : 'unconfigured'
    }
  });
});

// Public Customer Enquiry Submission (Rate-Limited, Validated, Escaped)
app.post('/api/send-email', enquiryLimiter, async (req, res) => {
  try {
    // 1. Validate request payload against backend Zod schema
    const parseResult = enquirySchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({
        success: false,
        message: 'Invalid request data. Please check required fields.'
      });
    }

    const validated = parseResult.data;
    const interest = validated.productInterest || validated.productName || 'General Inquiry';
    const detailText = validated.projectDetails || validated.message || 'No additional details provided.';

    // 2. Explicit construction of database insert object (prevents field manipulation)
    if (supabase) {
      const enquiryRecord = {
        full_name: validated.fullName,
        company_name: validated.companyName,
        email: validated.email,
        phone: validated.phone,
        product_interest: interest,
        quantity: validated.quantity || null,
        message: detailText,
        status: 'pending',
        type: validated.type
      };

      const { error: insertError } = await supabase
        .from('enquiries')
        .insert([enquiryRecord]);

      if (insertError) {
        console.error('❌ Error inserting customer enquiry into Supabase:', insertError.message);
      }
    }

    // 3. Dispatch Notification Emails with HTML Escaping
    if (resend) {
      try {
        const safeName = escapeHtml(validated.fullName);
        const safeCompany = escapeHtml(validated.companyName);
        const safeEmail = escapeHtml(validated.email);
        const safePhone = escapeHtml(validated.phone);
        const safeInterest = escapeHtml(interest);
        const safeQuantity = validated.quantity ? escapeHtml(validated.quantity) : null;
        const safeDetails = escapeHtml(detailText);

        const adminEmailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
            <div style="background-color: #1e293b; padding: 16px 24px; border-radius: 6px 6px 0 0;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New ${validated.type === 'quote' ? 'Product Quote Request' : 'Contact Inquiry'}</h2>
              <p style="color: #8CC63F; margin: 4px 0 0 0; font-size: 14px; font-weight: bold;">VIR packaging / Vir Engineers</p>
            </div>
            
            <div style="padding: 24px; color: #334155; line-height: 1.6;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #64748b;">Customer Name:</td>
                  <td style="padding: 8px 0;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Company:</td>
                  <td style="padding: 8px 0;">${safeCompany}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td>
                  <td style="padding: 8px 0;">${safeEmail}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Phone:</td>
                  <td style="padding: 8px 0;">${safePhone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Product/Category:</td>
                  <td style="padding: 8px 0; font-weight: bold; color: #8CC63F;">${safeInterest}</td>
                </tr>
                ${safeQuantity ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Quantity Required:</td>
                  <td style="padding: 8px 0;">${safeQuantity}</td>
                </tr>` : ''}
              </table>
              
              <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #8CC63F; border-radius: 4px;">
                <h4 style="margin: 0 0 8px 0; color: #1e293b;">Requirements / Details:</h4>
                <p style="margin: 0; color: #475569; white-space: pre-line;">${safeDetails}</p>
              </div>
            </div>
            
            <div style="padding: 16px 24px; background-color: #f1f5f9; border-radius: 0 0 6px 6px; text-align: center; color: #64748b; font-size: 12px;">
              Sent securely from Vir Engineers Web Platform
            </div>
          </div>
        `;

        await resend.emails.send({
          from: FROM_EMAIL,
          to: [TO_EMAIL],
          subject: `New Lead: ${safeInterest} - ${safeCompany}`,
          html: adminEmailHtml,
          text: `New Lead: ${validated.type}\nName: ${validated.fullName}\nCompany: ${validated.companyName}\nEmail: ${validated.email}\nPhone: ${validated.phone}\nInterest: ${interest}\nDetails:\n${detailText}`
        });

        // Customer confirmation receipt
        const customerEmailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #1e293b;">Thank you for contacting Vir Engineers</h2>
            <p>Dear ${safeName},</p>
            <p>We have received your enquiry regarding <strong>${safeInterest}</strong>.</p>
            <p>Our packaging engineering team is reviewing your requirement and will contact you within 24 hours.</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-size: 13px; color: #64748b;">
              <strong>Vir Engineers — Your Preferred Packaging Partner</strong><br />
              917, Maple Trade Centre, Thaltej, Ahmedabad, Gujarat - 380052<br />
              Direct Lines: +91 89803 30315 / +91 98244 44481 | Email: sales@virpackaging.com
            </p>
          </div>
        `;

        await resend.emails.send({
          from: FROM_EMAIL,
          to: [validated.email],
          subject: `We have received your enquiry — Vir Engineers`,
          html: customerEmailHtml,
          text: `Dear ${validated.fullName},\n\nThank you for contacting Vir Engineers. We have received your enquiry regarding ${interest}. Our team will contact you within 24 hours.\n\nVir Engineers\nPhone: +91 89803 30315 / +91 98244 44481`
        });
      } catch (emailErr) {
        console.error('❌ Error sending email notification:', emailErr.message);
      }
    }

    // 4. Return safe generic response without exposing database metadata or customer PII
    return res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully'
    });
  } catch (err) {
    console.error('❌ Server POST /api/send-email error:', err);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while submitting your enquiry. Please try again.'
    });
  }
});

// Admin: Paginated & Filtered Enquiries (Protected)
app.get('/api/enquiries', adminLimiter, requireAdminAuth, async (req, res) => {
  try {
    if (!supabase) {
      return res.status(503).json({
        success: false,
        message: 'Database service is not configured'
      });
    }

    // Validate and parse pagination query parameters
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit, 10) || 25));
    const offset = (page - 1) * limit;

    const { status, search } = req.query;

    let query = supabase
      .from('enquiries')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (status && status !== 'all') {
      if (['pending', 'contacted'].includes(status)) {
        query = query.eq('status', status);
      }
    }

    if (search) {
      const sanitized = sanitizeSearchParam(search);
      if (sanitized.length > 0) {
        query = query.or(
          `full_name.ilike.%${sanitized}%,company_name.ilike.%${sanitized}%,email.ilike.%${sanitized}%,product_interest.ilike.%${sanitized}%`
        );
      }
    }

    const { data, count, error } = await query;

    if (error) {
      console.error('❌ Error fetching enquiries:', error.message);
      return res.status(500).json({
        success: false,
        message: 'Failed to retrieve enquiries'
      });
    }

    const total = count || 0;
    const hasNextPage = offset + limit < total;

    return res.json({
      success: true,
      data: data || [],
      pagination: {
        page,
        limit,
        total,
        hasNextPage
      }
    });
  } catch (err) {
    console.error('❌ Error in GET /api/enquiries:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve enquiries'
    });
  }
});

// Admin: Update Enquiry Status (Protected)
app.patch('/api/enquiries/:id/status', adminLimiter, requireAdminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!UUID_REGEX.test(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid enquiry ID format'
      });
    }

    if (!['pending', 'contacted'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value. Allowed: pending, contacted'
      });
    }

    if (!supabase) {
      return res.status(503).json({
        success: false,
        message: 'Database service is not configured'
      });
    }

    const { data, error } = await supabase
      .from('enquiries')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('❌ Error updating enquiry status:', error.message);
      return res.status(500).json({
        success: false,
        message: 'Failed to update enquiry status'
      });
    }

    // Optional: Log administrative audit record
    try {
      await supabase.from('admin_audit_logs').insert([
        {
          admin_user_id: req.user.id,
          action: 'UPDATE_STATUS',
          entity_type: 'enquiry',
          entity_id: id,
          metadata: { new_status: status }
        }
      ]);
    } catch (auditErr) {
      console.warn('⚠️ Audit log insert non-critical failure:', auditErr.message);
    }

    return res.json({
      success: true,
      data
    });
  } catch (err) {
    console.error('❌ Error in PATCH /api/enquiries/:id/status:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to update enquiry status'
    });
  }
});

// Global Error Handler Middleware (Sanitizes error responses)
app.use((err, req, res, next) => {
  console.error('❌ Unhandled server error:', err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'An internal server error occurred'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Production-hardened server listening on http://localhost:${PORT}`);
});
