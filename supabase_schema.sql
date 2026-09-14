-- Supabase SQL Schema for Vir Packaging / Vir Engineers

-- Create enquiries table
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
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted')),
  type TEXT DEFAULT 'contact' CHECK (type IN ('contact', 'quote'))
);

-- Grant table permissions to public, anon, and service_role
GRANT ALL ON TABLE public.enquiries TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role;

-- Enable Row Level Security
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Allow public insertion of enquiries
DROP POLICY IF EXISTS "Allow public insert" ON public.enquiries;
CREATE POLICY "Allow public insert" ON public.enquiries
  FOR INSERT WITH CHECK (true);

-- Allow public & admin select for enquiries
DROP POLICY IF EXISTS "Allow public select" ON public.enquiries;
CREATE POLICY "Allow public select" ON public.enquiries
  FOR SELECT USING (true);

-- Allow authenticated admins to update enquiry status
DROP POLICY IF EXISTS "Allow authenticated update" ON public.enquiries;
CREATE POLICY "Allow authenticated update" ON public.enquiries
  FOR UPDATE USING (true);

-- Create performance indexes
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_email ON public.enquiries(email);
