import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, PackageX, Home, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function NotFound() {
  return (
    <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', padding: '60px 20px' }}>
      <div style={{ maxWidth: '520px', width: '100%', textAlign: 'center', backgroundColor: '#ffffff', padding: '48px 32px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(140, 198, 63, 0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          <PackageX size={32} style={{ color: 'var(--color-primary, #8CC63F)' }} />
        </div>

        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#0f172a', margin: '0 0 8px 0', lineHeight: 1 }}>
          404
        </h1>
        
        <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#334155', margin: '0 0 16px 0' }}>
          Page Not Found
        </h2>

        <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 32px 0' }}>
          The packaging solution or page you are looking for does not exist or has been moved. Explore our catalog or get in touch with our team.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/">
            <Button variant="default" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Home size={16} /> Return Home
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <ArrowLeft size={16} /> Product Catalog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
