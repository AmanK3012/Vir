import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Clients
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;
if (supabaseUrl && supabaseKey && !supabaseUrl.includes('demo') && !supabaseUrl.includes('placeholder')) {
  supabase = createClient(supabaseUrl, supabaseKey);
  console.log('✅ Supabase initialized successfully');
} else {
  console.warn('⚠️ Supabase credentials not set or using placeholders. Database ops will run in fallback mode.');
}

const resendApiKey = process.env.RESEND_API_KEY;
let resend = null;
if (resendApiKey && resendApiKey.startsWith('re_') && !resendApiKey.includes('demo')) {
  resend = new Resend(resendApiKey);
  console.log('✅ Resend API initialized successfully');
} else {
  console.warn('⚠️ RESEND_API_KEY not configured or invalid. Email sending will run in simulation mode.');
}

const TO_EMAIL = process.env.TO_EMAIL || 'sales@virpackaging.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'Vir Engineers <onboarding@resend.dev>';

// Auth Middleware for Admin Routes
const requireAdminAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Missing token' });
  }

  const token = authHeader.split(' ')[1];

  if (!supabase) {
    // If Supabase is not configured yet, check for emergency dev admin token or fallback
    if (token === 'dev_admin_session') {
      req.user = { email: 'admin@virpackaging.com' };
      return next();
    }
    return res.status(401).json({ success: false, error: 'Supabase server auth not configured' });
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (error || !user) {
      return res.status(401).json({ success: false, error: 'Unauthorized: Invalid token' });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, error: 'Authentication error' });
  }
};

// Root Endpoint
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Vir Engineers Backend API Server is running',
    health: '/api/health',
    status: 'online'
  });
});

// 1. Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    services: {
      supabase: supabase ? 'connected' : 'unconfigured',
      resend: resend ? 'connected' : 'unconfigured'
    }
  });
});

// 2. Send Email & Save Enquiry (POST /api/send-email)
app.post('/api/send-email', async (req, res) => {
  try {
    const {
      fullName,
      companyName,
      email,
      phone,
      productInterest,
      productName,
      projectDetails,
      message,
      quantity,
      type = 'contact'
    } = req.body;

    const interest = productInterest || productName || 'General Inquiry';
    const detailText = projectDetails || message || 'No additional details provided.';

    // Server-side validation
    if (!fullName || !companyName || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: Full Name, Company Name, Email, and Phone are required.'
      });
    }

    let savedEnquiry = null;

    // A. Save record into Supabase Database if configured
    if (supabase) {
      const { data, error } = await supabase
        .from('enquiries')
        .insert([
          {
            full_name: fullName,
            company_name: companyName,
            email: email,
            phone: phone,
            product_interest: interest,
            quantity: quantity || null,
            message: detailText,
            status: 'pending',
            type: type
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('❌ Error inserting enquiry into Supabase:', error.message);
      } else {
        savedEnquiry = data;
        console.log('💾 Saved enquiry to Supabase DB:', data.id);
      }
    } else {
      console.log('ℹ️ Mock Saved Enquiry (Supabase unconfigured):', { fullName, email, interest });
    }

    // B. Send Admin Notification Email via Resend
    let resendResult = null;
    let customerResult = null;

    if (resend) {
      try {
        const adminEmailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
            <div style="background-color: #1e293b; padding: 16px 24px; border-radius: 6px 6px 0 0;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New ${type === 'quote' ? 'Product Quote Request' : 'Contact Inquiry'}</h2>
              <p style="color: #8CC63F; margin: 4px 0 0 0; font-size: 14px; font-weight: bold;">VIR packaging / Vir Engineers</p>
            </div>
            
            <div style="padding: 24px; color: #334155; line-height: 1.6;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #64748b;">Customer Name:</td>
                  <td style="padding: 8px 0;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Company:</td>
                  <td style="padding: 8px 0;">${companyName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0284c7;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Phone:</td>
                  <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #0284c7;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Product/Category:</td>
                  <td style="padding: 8px 0; font-weight: bold; color: #8CC63F;">${interest}</td>
                </tr>
                ${quantity ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Quantity Required:</td>
                  <td style="padding: 8px 0;">${quantity}</td>
                </tr>` : ''}
              </table>
              
              <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #8CC63F; border-radius: 4px;">
                <h4 style="margin: 0 0 8px 0; color: #1e293b;">Requirements / Details:</h4>
                <p style="margin: 0; color: #475569; white-space: pre-line;">${detailText}</p>
              </div>
            </div>
            
            <div style="padding: 16px 24px; background-color: #f1f5f9; border-radius: 0 0 6px 6px; text-align: center; color: #64748b; font-size: 12px;">
              Sent automatically from Vir Engineers Website Backend
            </div>
          </div>
        `;

        resendResult = await resend.emails.send({
          from: FROM_EMAIL,
          to: [TO_EMAIL],
          subject: `New Lead: ${interest} - ${companyName}`,
          html: adminEmailHtml
        });
        console.log('✉️ Resend notification email sent:', resendResult);

        // Send confirmation to customer
        const customerEmailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #1e293b;">Thank you for contacting Vir Engineers</h2>
            <p>Dear ${fullName},</p>
            <p>We have received your enquiry regarding <strong>${interest}</strong>.</p>
            <p>Our technical team is reviewing your requirements and will reach out to you within 24 hours.</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-size: 13px; color: #64748b;">
              <strong>Vir Engineers / Vir Packaging</strong><br />
              123 Industrial Estate, Phase II, Ahmedabad, Gujarat, India<br />
              Phone: +91 98244 44481 | Email: sales@virpackaging.com
            </p>
          </div>
        `;

        customerResult = await resend.emails.send({
          from: FROM_EMAIL,
          to: [email],
          subject: `We have received your enquiry - Vir Engineers`,
          html: customerEmailHtml
        });
        console.log('✉️ Resend customer confirmation email sent:', customerResult);
      } catch (emailErr) {
        console.error('❌ Resend email send error:', emailErr);
      }
    } else {
      console.log('ℹ️ Simulated Resend Email Sending (RESEND_API_KEY unconfigured).');
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully!',
      data: savedEnquiry,
      emailSent: Boolean(resendResult)
    });
  } catch (err) {
    console.error('❌ Server POST /api/send-email error:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your enquiry.'
    });
  }
});

// 3. Admin Get Enquiries (GET /api/enquiries) - Protected
app.get('/api/enquiries', requireAdminAuth, async (req, res) => {
  try {
    const { status, search } = req.query;

    if (!supabase) {
      return res.status(500).json({
        success: false,
        error: 'Supabase is not configured on the server.'
      });
    }

    let query = supabase
      .from('enquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (status && status !== 'all') {
      query = query.eq('status', status);
    }

    if (search) {
      query = query.or(`full_name.ilike.%${search}%,company_name.ilike.%${search}%,email.ilike.%${search}%,product_interest.ilike.%${search}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error('❌ Error fetching enquiries:', error.message);
      return res.status(500).json({ success: false, error: error.message });
    }

    res.json({ success: true, data });
  } catch (err) {
    console.error('❌ Error in GET /api/enquiries:', err);
    res.status(500).json({ success: false, error: 'Failed to fetch enquiries' });
  }
});

// 4. Admin Update Enquiry Status (PATCH /api/enquiries/:id/status) - Protected
app.patch('/api/enquiries/:id/status', requireAdminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['pending', 'contacted'].includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid status value. Allowed: pending, contacted.'
      });
    }

    if (!supabase) {
      return res.status(500).json({
        success: false,
        error: 'Supabase is not configured on the server.'
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
      return res.status(500).json({ success: false, error: error.message });
    }

    res.json({ success: true, data });
  } catch (err) {
    console.error('❌ Error in PATCH /api/enquiries/:id/status:', err);
    res.status(500).json({ success: false, error: 'Failed to update enquiry status' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
