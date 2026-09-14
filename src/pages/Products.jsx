import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import EnquiryFormDialog from '../components/EnquiryFormDialog';
import { Button } from '../components/ui/button';
import { FileText, ArrowRight, Eye } from 'lucide-react';
import { productCategories } from '../data/productsData';

const categories = Object.keys(productCategories);

export default function Products() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    if (location.state && location.state.activeTab && categories.includes(location.state.activeTab)) {
      return location.state.activeTab;
    }
    return categories[0];
  });
  const [activeSubcat, setActiveSubcat] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  useEffect(() => {
    if (location.state && location.state.activeTab && categories.includes(location.state.activeTab)) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  useEffect(() => {
    setActiveSubcat("All");
  }, [activeTab]);

  const currentCategory = productCategories[activeTab] || productCategories[categories[0]];
  const CategoryIcon = currentCategory.icon;
  const subcategoryNames = Object.keys(currentCategory.subcategories);
  const visibleSubcategories = activeSubcat === "All" ? subcategoryNames : [activeSubcat];

  return (
    <div className="page-products">
      <div className="catalog-layout">
        {/* Sidebar */}
        <div className="catalog-sidebar">
          <div className="sidebar-header">
            <h3>CATEGORIES</h3>
          </div>
          <ul className="category-list">
            {categories.map((cat) => {
              const Icon = productCategories[cat].icon;
              return (
                <li 
                  key={cat} 
                  className={activeTab === cat ? 'active' : ''}
                  onClick={() => setActiveTab(cat)}
                >
                  <Icon size={18} className="cat-icon" />
                  <span>{cat}</span>
                </li>
              );
            })}
          </ul>

          {/* Brochure Card in Sidebar */}
          <div style={{ marginTop: '24px', padding: '16px', borderRadius: '8px', background: 'var(--color-surface-hover, #1e293b)', color: '#fff' }}>
            <FileText size={24} className="text-primary" style={{ marginBottom: '8px' }} />
            <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '6px' }}>Technical Brochure</h4>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '12px' }}>Download Vir Engineers product catalog & specifications.</p>
            <a 
              href="/images/For Website/Vir Engineers.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--color-primary, #3b82f6)', fontWeight: 600, textDecoration: 'underline' }}
            >
              Download PDF →
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="catalog-content">
          <div className="catalog-hero fade-in-section is-visible" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h1>INDUSTRIAL <span className="text-primary">CATALOG</span></h1>
              <p>Explore our comprehensive range of high-performance industrial solutions.</p>
            </div>
            <a
              href="/images/For Website/Vir Engineers.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px' }}
            >
              <FileText size={18} />
              Download Full Catalog (PDF)
            </a>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              className="product-display"
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="category-details-header">
                <div className="header-title-row">
                  <CategoryIcon size={32} className="text-primary" />
                  <h2>{activeTab}</h2>
                </div>
                <p className="category-intro-text">{currentCategory.desc}</p>
              </div>

              {/* Partnership Highlights for Corrosion Control Solutions */}
              {activeTab === "Corrosion Control Solutions" && (
                <div className="partner-highlights-container">
                  <div className="partner-card-highlight zerust" style={{ width: '100%', maxWidth: '100%' }}>
                    <div className="partner-badge">GLOBAL JOINT VENTURE</div>
                    <h3>Corrosion Protection Solutions</h3>
                    <span className="partner-powered">Powered by Zerust®</span>
                    <p>
                      Through our exclusive partnership with Zerust®, a global leader in VCI packaging, we offer advanced rust-prevention systems that release protective molecules forming an atomic-thin layer on metals.
                    </p>
                    <ul className="partner-points">
                      <li>✓ Multi-metal volatile corrosion inhibitor protection</li>
                      <li>✓ Rust Remover & Long-term Preventive Oils</li>
                      <li>✓ Full global joint-venture technical support</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Partnership Highlights for Moisture Control Solutions */}
              {activeTab === "Moisture Control Solutions" && (
                <div className="partner-highlights-container">
                  <div className="partner-card-highlight clariant" style={{ width: '100%', maxWidth: '100%' }}>
                    <div className="partner-badge">OFFICIAL REPRESENTATIVE</div>
                    <h3>Active Moisture Defense Systems</h3>
                    <span className="partner-powered">Representing Clariant Advanced</span>
                    <p>
                      We represent Clariant's active moisture defense systems. Featuring Container Dri® II, which absorbs up to 300% moisture by weight and locks it as a food-safe, non-toxic gel.
                    </p>
                    <ul className="partner-points">
                      <li>✓ DMF-free, non-toxic calcium chloride formulation</li>
                      <li>✓ Eliminates container rain condensation during ocean transit</li>
                      <li>✓ Exceeds ISO, DIN 55473, and FDA compliance standards</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Subcategories Filter Tabs */}
              {subcategoryNames.length > 1 && (
                <div className="subcat-tabs-bar">
                  <button 
                    className={`subcat-tab-btn ${activeSubcat === 'All' ? 'active' : ''}`}
                    onClick={() => setActiveSubcat('All')}
                  >
                    Show All
                  </button>
                  {subcategoryNames.map((subcat) => (
                    <button
                      key={subcat}
                      className={`subcat-tab-btn ${activeSubcat === subcat ? 'active' : ''}`}
                      onClick={() => setActiveSubcat(subcat)}
                    >
                      {subcat}
                    </button>
                  ))}
                </div>
              )}

              {visibleSubcategories.map((subcatName, subIdx) => (
                <div key={subcatName} className="subcategory-section" style={{ marginTop: subIdx === 0 && subcategoryNames.length <= 1 ? '1rem' : '2.5rem' }}>
                  <h3 className="subcategory-title">{subcatName}</h3>
                  
                  <div className="sub-products-grid">
                    {currentCategory.subcategories[subcatName].map((prod, idx) => (
                      <motion.div
                        key={prod.id || idx}
                        className="sub-product-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link to={`/products/${prod.slug}`} className="sub-product-image">
                          <img 
                            src={prod.img} 
                            alt={prod.name}
                            loading="lazy"
                          />
                          <span className="product-image-overlay-badge">
                            <Eye size={14} /> View Details
                          </span>
                        </Link>
                        <div className="sub-product-content">
                          <Link to={`/products/${prod.slug}`}>
                            <h3>{prod.name}</h3>
                          </Link>
                          <p>{prod.shortDesc || prod.desc}</p>
                          
                          <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <Link 
                              to={`/products/${prod.slug}`}
                              className="btn btn-outline btn-sm"
                              style={{ flex: 1, textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
                            >
                              Details <ArrowRight size={14} />
                            </Link>

                            <div onClick={(e) => e.stopPropagation()}>
                              <EnquiryFormDialog
                                productName={prod.name}
                                trigger={
                                  <Button variant="default" size="sm" className="px-4 font-semibold tracking-wide">
                                    Enquire
                                  </Button>
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Contact Bar */}
          <div className="catalog-contact-bar" style={{ marginTop: '60px' }}>
            <span>Need a custom solution or corporate catalog?</span>
            <strong>sales@virpackaging.com | +91 98244 44481</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
