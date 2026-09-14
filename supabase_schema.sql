-- ==========================================================
-- Supabase Production Security Schema for Vir Engineers
-- ==========================================================

-- 1. ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  full_name TEXT NOT NULL,
  company_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  product_interest TEXT NOT NULL,
  quantity TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending' NOT NULL CHECK (status IN ('pending', 'contacted')),
  type TEXT DEFAULT 'contact' NOT NULL CHECK (type IN ('contact', 'quote'))
);

-- Revoke default broad grants from anon and authenticated
REVOKE ALL ON TABLE public.enquiries FROM anon, authenticated;
REVOKE ALL ON ALL SEQUENCES IN SCHEMA public FROM anon, authenticated;

-- Grant least-privilege INSERT ONLY to anon for customer submissions
GRANT INSERT ON TABLE public.enquiries TO anon;
GRANT ALL ON TABLE public.enquiries TO service_role;

-- Enable Row Level Security
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Drop insecure legacy policies if they exist
DROP POLICY IF EXISTS "Allow public insert" ON public.enquiries;
DROP POLICY IF EXISTS "Allow public select" ON public.enquiries;
DROP POLICY IF EXISTS "Allow authenticated update" ON public.enquiries;
DROP POLICY IF EXISTS "Public can submit enquiries" ON public.enquiries;

-- Public (anon) can only INSERT new customer enquiries
CREATE POLICY "Public can submit enquiries" ON public.enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- NO public SELECT policy is created. Public cannot read enquiries.
-- NO public UPDATE policy is created. Public cannot edit enquiries.
-- The secure Express backend reads and updates records using service_role credentials only.

-- 2. ADMIN USERS TABLE (Database-backed Role Authorization)
CREATE TABLE IF NOT EXISTS public.admin_users (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'admin' CHECK (role IN ('admin', 'manager')),
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Secure admin_users table
REVOKE ALL ON TABLE public.admin_users FROM anon, authenticated;
GRANT ALL ON TABLE public.admin_users TO service_role;

ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read their own admin role status
DROP POLICY IF EXISTS "Admins can view own admin profile" ON public.admin_users;
CREATE POLICY "Admins can view own admin profile" ON public.admin_users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- 3. AUDIT LOGS TABLE (For administrative accountability)
CREATE TABLE IF NOT EXISTS public.admin_audit_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  admin_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

REVOKE ALL ON TABLE public.admin_audit_logs FROM anon, authenticated;
GRANT ALL ON TABLE public.admin_audit_logs TO service_role;
ALTER TABLE public.admin_audit_logs ENABLE ROW LEVEL SECURITY;

-- 4. PERFORMANCE INDEXES
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_email ON public.enquiries(email);
CREATE INDEX IF NOT EXISTS idx_admin_users_active ON public.admin_users(active);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created ON public.admin_audit_logs(created_at DESC);
