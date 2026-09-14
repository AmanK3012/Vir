import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import {
  Inbox,
  Clock,
  PhoneCall,
  Search,
  LogOut,
  Eye,
  RefreshCw,
  X,
  Mail,
  Phone,
  Building,
  User,
  Package
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export default function AdminDashboard() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ page: 1, limit: 25, total: 0, hasNextPage: false });
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setPage(1);
    fetchEnquiries(1);
  }, [statusFilter]);

  const getAuthToken = () => {
    return localStorage.getItem('admin_token');
  };

  const fetchEnquiries = async (targetPage = page) => {
    const token = getAuthToken();
    if (!token) {
      navigate('/admin/login');
      return;
    }

    setLoading(true);
    setError('');

    try {
      let url = `/api/enquiries?page=${targetPage}&limit=25&status=${statusFilter}`;
      if (search) {
        url += `&search=${encodeURIComponent(search)}`;
      }

      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 401) {
        localStorage.removeItem('admin_token');
        navigate('/admin/login');
        return;
      }

      if (response.status === 403) {
        setError('Access Denied: Your account does not have administrator authorization. Please contact system admin.');
        setEnquiries([]);
        setLoading(false);
        return;
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to fetch enquiries.');
      }

      setEnquiries(result.data || []);
      if (result.pagination) {
        setPagination(result.pagination);
        setPage(result.pagination.page);
      }
    } catch (err) {
      console.error('Fetch enquiries error:', err);
      setError(err.message || 'Error fetching enquiries from server.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchEnquiries(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1) return;
    setPage(newPage);
    fetchEnquiries(newPage);
  };

  const handleStatusChange = async (id, newStatus) => {
    const token = getAuthToken();
    if (!token) {
      navigate('/admin/login');
      return;
    }

    setUpdatingId(id);
    try {
      const response = await fetch(`/api/enquiries/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to update status.');
      }

      // Update local state
      setEnquiries(prev =>
        prev.map(item => (item.id === id ? { ...item, status: newStatus } : item))
      );

      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry(prev => ({ ...prev, status: newStatus }));
      }
    } catch (err) {
      alert(err.message || 'Could not update status.');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    navigate('/admin/login');
  };

  // Metric counts
  const totalCount = enquiries.length;
  const pendingCount = enquiries.filter(item => item.status === 'pending').length;
  const contactedCount = enquiries.filter(item => item.status === 'contacted').length;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', paddingBottom: '60px' }}>
      
      {/* Admin Header */}
      <header style={{ backgroundColor: '#1e293b', color: '#ffffff', padding: '16px 24px', borderBottom: '3px solid #8CC63F' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>
              VIR <span style={{ color: '#8CC63F' }}>ENGINEERS</span> Admin Portal
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '0.75rem', margin: 0 }}>
              Lead Management & Customer Enquiries
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Button
              variant="outline"
              size="sm"
              onClick={fetchEnquiries}
              style={{ backgroundColor: 'transparent', color: '#ffffff', borderColor: '#475569' }}
            >
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Refresh
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={handleLogout}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <LogOut size={14} /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div style={{ maxWidth: '1200px', margin: '32px auto', padding: '0 24px' }}>
        
        {/* Metric Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748b' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Total Enquiries</span>
              <Inbox size={20} style={{ color: '#0284c7' }} />
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: '#0f172a' }}>{totalCount}</div>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748b' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Pending Action</span>
              <Clock size={20} style={{ color: '#d97706' }} />
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: '#d97706' }}>{pendingCount}</div>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748b' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Contacted</span>
              <PhoneCall size={20} style={{ color: '#2563eb' }} />
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', color: '#2563eb' }}>{contactedCount}</div>
          </div>

        </div>

        {/* Filter and Search Bar */}
        <div style={{ backgroundColor: '#ffffff', padding: '16px 20px', borderRadius: '10px', border: '1px solid #e2e8f0', marginBottom: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          
          {/* Status Filter Tabs */}
          <div style={{ display: 'flex', gap: '8px', backgroundColor: '#f1f5f9', padding: '4px', borderRadius: '8px' }}>
            {['all', 'pending', 'contacted'].map(status => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: statusFilter === status ? '#ffffff' : 'transparent',
                  color: statusFilter === status ? '#0f172a' : '#64748b',
                  boxShadow: statusFilter === status ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '8px', maxWidth: '360px', flex: 1 }}>
            <Input
              placeholder="Search name, company, email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ backgroundColor: '#f8fafc' }}
            />
            <Button type="submit" variant="default">
              <Search size={16} />
            </Button>
          </form>

        </div>

        {/* Error Banner */}
        {error && (
          <div style={{ backgroundColor: '#fef2f2', color: '#dc2626', padding: '16px', borderRadius: '8px', marginBottom: '24px', border: '1px solid #fecaca' }}>
            {error}
          </div>
        )}

        {/* Enquiries Table */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          {loading ? (
            <div style={{ padding: '48px', textAlign: 'center', color: '#64748b' }}>
              Loading enquiries...
            </div>
          ) : enquiries.length === 0 ? (
            <div style={{ padding: '48px', textAlign: 'center', color: '#64748b' }}>
              No enquiries found matching your filter criteria.
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                    <th style={{ padding: '14px 16px' }}>Date</th>
                    <th style={{ padding: '14px 16px' }}>Customer</th>
                    <th style={{ padding: '14px 16px' }}>Company</th>
                    <th style={{ padding: '14px 16px' }}>Product / Interest</th>
                    <th style={{ padding: '14px 16px' }}>Type</th>
                    <th style={{ padding: '14px 16px' }}>Status</th>
                    <th style={{ padding: '14px 16px', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((item) => (
                    <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '14px 16px', color: '#64748b', whiteSpace: 'nowrap' }}>
                        {new Date(item.created_at).toLocaleDateString()}
                      </td>
                      <td style={{ padding: '14px 16px', fontWeight: 600, color: '#0f172a' }}>
                        {item.full_name}
                        <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 400 }}>{item.email}</div>
                      </td>
                      <td style={{ padding: '14px 16px', color: '#334155' }}>
                        {item.company_name}
                      </td>
                      <td style={{ padding: '14px 16px', fontWeight: 500, color: '#1e293b' }}>
                        {item.product_interest}
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          backgroundColor: item.type === 'quote' ? '#eff6ff' : '#f5f3ff',
                          color: item.type === 'quote' ? '#2563eb' : '#7c3aed'
                        }}>
                          {item.type === 'quote' ? 'Quote Req' : 'Contact'}
                        </span>
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          backgroundColor: item.status === 'pending' ? '#fef3c7' : '#dbeafe',
                          color: item.status === 'pending' ? '#d97706' : '#2563eb'
                        }}>
                          {item.status}
                        </span>
                      </td>
                      <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedEnquiry(item)}
                            title="View Full Details"
                          >
                            <Eye size={16} />
                          </Button>

                          {item.status === 'pending' ? (
                            <Button
                              variant="outline"
                              size="sm"
                              disabled={updatingId === item.id}
                              onClick={() => handleStatusChange(item.id, 'contacted')}
                              style={{ color: '#2563eb', borderColor: '#bfdbfe' }}
                            >
                              Mark Contacted
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              disabled={updatingId === item.id}
                              onClick={() => handleStatusChange(item.id, 'pending')}
                              style={{ color: '#d97706', borderColor: '#fde68a' }}
                            >
                              Mark Pending
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination Controls */}
          {pagination.total > 0 && (
            <div style={{ padding: '14px 20px', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f8fafc', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                Showing page <strong style={{ color: '#0f172a' }}>{page}</strong> of <strong style={{ color: '#0f172a' }}>{Math.max(1, Math.ceil(pagination.total / pagination.limit))}</strong> ({pagination.total} total enquiries)
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page <= 1 || loading}
                  onClick={() => handlePageChange(page - 1)}
                >
                  ← Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={!pagination.hasNextPage || loading}
                  onClick={() => handlePageChange(page + 1)}
                >
                  Next →
                </Button>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Details Modal */}
      {selectedEnquiry && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: '16px' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', width: '100%', maxWidth: '600px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            
            <div style={{ backgroundColor: '#1e293b', color: '#ffffff', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 700 }}>
                Enquiry Details <span style={{ color: '#8CC63F' }}>#{selectedEnquiry.id.slice(0, 8)}</span>
              </h3>
              <button
                onClick={() => setSelectedEnquiry(null)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '70vh', overflowY: 'auto' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <User size={14} /> Customer Name
                  </div>
                  <div style={{ fontWeight: 700, marginTop: '2px', color: '#0f172a' }}>{selectedEnquiry.full_name}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Building size={14} /> Company
                  </div>
                  <div style={{ fontWeight: 700, marginTop: '2px', color: '#0f172a' }}>{selectedEnquiry.company_name}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Mail size={14} /> Email
                  </div>
                  <a href={`mailto:${selectedEnquiry.email}`} style={{ color: '#0284c7', fontWeight: 600, fontSize: '0.875rem' }}>
                    {selectedEnquiry.email}
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Phone size={14} /> Phone
                  </div>
                  <a href={`tel:${selectedEnquiry.phone}`} style={{ color: '#0284c7', fontWeight: 600, fontSize: '0.875rem' }}>
                    {selectedEnquiry.phone}
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Package size={14} /> Product Interest
                  </div>
                  <div style={{ fontWeight: 700, marginTop: '2px', color: '#8CC63F' }}>{selectedEnquiry.product_interest}</div>
                </div>

                {selectedEnquiry.quantity && (
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Quantity Required</div>
                    <div style={{ fontWeight: 700, marginTop: '2px', color: '#0f172a' }}>{selectedEnquiry.quantity}</div>
                  </div>
                )}
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', marginTop: '8px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>Message / Requirements:</div>
                <div style={{ whiteSpace: 'pre-line', color: '#1e293b', fontSize: '0.875rem', lineHeight: 1.5 }}>
                  {selectedEnquiry.message}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0', paddingTop: '16px', marginTop: '8px' }}>
                <div style={{ fontSize: '0.875rem' }}>
                  Current Status: <strong style={{ textTransform: 'uppercase' }}>{selectedEnquiry.status}</strong>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <Button
                    size="sm"
                    variant={selectedEnquiry.status === 'pending' ? 'default' : 'outline'}
                    onClick={() => handleStatusChange(selectedEnquiry.id, 'pending')}
                  >
                    Pending
                  </Button>
                  <Button
                    size="sm"
                    variant={selectedEnquiry.status === 'contacted' ? 'default' : 'outline'}
                    onClick={() => handleStatusChange(selectedEnquiry.id, 'contacted')}
                  >
                    Contacted
                  </Button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
