import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 1. Supabase Auth attempt
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        throw authError;
      }

      if (data.session) {
        localStorage.setItem('admin_token', data.session.access_token);
        localStorage.setItem('admin_user', JSON.stringify(data.user));
        navigate('/admin');
      }
    } catch (err) {
      console.error('Login failed:', err.message);
      setError(err.message || 'Invalid admin credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', padding: '24px 16px' }}>
      <div style={{ width: '100%', maxWidth: '420px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.01)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        
        {/* Top Banner */}
        <div style={{ backgroundColor: '#1e293b', padding: '32px 24px', textAlign: 'center' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(140, 198, 63, 0.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
            <ShieldCheck size={28} style={{ color: '#8CC63F' }} />
          </div>
          <h1 style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>
            VIR <span style={{ color: '#8CC63F' }}>ADMIN PORTAL</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginTop: '6px' }}>
            Sign in to access lead management & enquiries
          </p>
        </div>

        {/* Form Container */}
        <div style={{ padding: '32px 24px' }}>
          {error && (
            <div style={{ backgroundColor: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', padding: '12px 16px', borderRadius: '8px', fontSize: '0.875rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertCircle size={18} style={{ shrink: 0 }} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <Label htmlFor="admin-email" style={{ marginBottom: '6px', display: 'block' }}>Email Address</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="admin-email"
                  type="email"
                  placeholder="admin@virpackaging.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ paddingLeft: '38px' }}
                />
                <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              </div>
            </div>

            <div>
              <Label htmlFor="admin-password" style={{ marginBottom: '6px', display: 'block' }}>Password</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="admin-password"
                  type="password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ paddingLeft: '38px' }}
                />
                <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              </div>
            </div>

            <Button
              type="submit"
              variant="default"
              size="lg"
              disabled={loading}
              style={{ marginTop: '12px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              {loading ? 'Authenticating...' : (
                <>
                  SIGN IN TO DASHBOARD <ArrowRight size={18} />
                </>
              )}
            </Button>
          </form>
        </div>

      </div>
    </div>
  );
}
