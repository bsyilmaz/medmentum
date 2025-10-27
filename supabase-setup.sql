-- Medmentum Database Setup
-- Run these commands in your Supabase SQL Editor

-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  image_url TEXT,
  author TEXT NOT NULL,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  features JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create product_updates table
CREATE TABLE IF NOT EXISTS product_updates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(published);
CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON blogs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_product_updates_product_id ON product_updates(product_id);
CREATE INDEX IF NOT EXISTS idx_product_updates_date ON product_updates(date DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_updates ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can read published blogs" ON blogs
  FOR SELECT USING (published = true);

CREATE POLICY "Public can read products" ON products
  FOR SELECT USING (true);

CREATE POLICY "Public can read product updates" ON product_updates
  FOR SELECT USING (true);

-- Create policies for authenticated users (admin)
CREATE POLICY "Authenticated users can insert blogs" ON blogs
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update blogs" ON blogs
  FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Authenticated users can delete blogs" ON blogs
  FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert products" ON products
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update products" ON products
  FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Authenticated users can delete products" ON products
  FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert product updates" ON product_updates
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update product updates" ON product_updates
  FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Authenticated users can delete product updates" ON product_updates
  FOR DELETE TO authenticated USING (true);

-- Insert sample products
INSERT INTO products (name, description, image_url, features) VALUES
  (
    'AI Diagnostics Platform',
    'Yapay zeka destekli teşhis platformu ile hızlı ve doğru tanılar',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    '["AI-Powered", "Real-time Analysis", "Cloud-based", "HIPAA Compliant"]'::jsonb
  ),
  (
    'Telemedicine Suite',
    'Uzaktan hasta bakımı ve konsültasyon için kapsamlı çözüm',
    'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800',
    '["Video Calls", "Appointment Scheduling", "E-Prescriptions", "Secure Messaging"]'::jsonb
  ),
  (
    'Health Records System',
    'Elektronik sağlık kayıtları yönetim sistemi',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    '["Digital Records", "Easy Access", "Data Analytics", "Integration APIs"]'::jsonb
  ),
  (
    'Patient Monitoring',
    'Gerçek zamanlı hasta izleme ve alarm sistemi',
    'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800',
    '["Real-time Monitoring", "Alert System", "Mobile App", "IoT Integration"]'::jsonb
  ),
  (
    'Laboratory Management',
    'Laboratuvar iş akışları için entegre yönetim sistemi',
    'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800',
    '["Sample Tracking", "Result Management", "Quality Control", "Reporting"]'::jsonb
  ),
  (
    'Pharmacy Integration',
    'Eczane ve reçete yönetimi entegrasyon çözümü',
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800',
    '["Prescription Management", "Inventory Control", "Billing", "Insurance Claims"]'::jsonb
  );

-- Note: You'll need to create an admin user manually in Supabase Authentication
-- Go to Authentication > Users > Add User
-- Email: admin@medmentum.com
-- Password: (set your secure password)

