import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ChevronRight, 
  ShieldCheck, 
  Download, 
  PhoneCall, 
  MessageSquare, 
  CheckCircle2, 
  Layers, 
  Package, 
  Truck, 
  Building2, 
  FileText,
  Share2,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/productsData';
import EnquiryFormDialog from '../components/EnquiryFormDialog';
import { Button } from '../components/ui/button';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);

  const [activeImage, setActiveImage] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [isCopied, setIsCopied] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  // Scroll to top whenever the slug / route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      const initialImg = product.images && product.images.length > 0 ? product.images[0] : product.img;
      setActiveImage(initialImg);
      setActiveTab('overview');
    }
  }, [slug, product]);

  if (!product) {
    return (
      <div className="product-not-found-container">
        <div className="container" style={{ padding: '120px 24px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Package size={64} style={{ color: 'var(--color-primary, #3b82f6)', marginBottom: '24px', opacity: 0.8 }} />
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>Product Not Found</h1>
          <p style={{ color: '#94a3b8', maxWidth: '500px', marginBottom: '32px', fontSize: '1.1rem' }}>
            The product you are looking for does not exist or may have been moved. Explore our comprehensive industrial packaging catalog.
          </p>
          <Link to="/products" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <ArrowLeft size={18} /> Back to Products Catalog
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = product.images && product.images.length > 0 ? product.images : [product.img];
  const relatedProducts = getRelatedProducts(product.slug, product.category, 4);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${product.name} | Vir Engineers`,
          text: product.shortDesc,
          url: window.location.href,
        });
      } catch (err) {
        // user cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  return (
    <div className="product-detail-page">
      {/* Breadcrumbs */}
      <div className="product-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <Link to="/products">Products</Link>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <Link to="/products" state={{ activeTab: product.category }}>
              {product.category}
            </Link>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container product-detail-main">
        <div className="product-detail-grid">
          {/* Left Column: Interactive Image Gallery */}
          <div className="product-gallery-column">
            <div className="product-gallery-sticky">
              <div className="product-main-image-wrapper">
                <motion.img 
                  key={activeImage}
                  src={activeImage || product.img} 
                  alt={product.name}
                  className="product-main-image"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setIsImageZoomed(true)}
                />
                <button 
                  className="gallery-zoom-trigger" 
                  onClick={() => setIsImageZoomed(true)} 
                  title="Click to expand image"
                  aria-label="Expand image"
                >
                  <Maximize2 size={18} />
                </button>
                {product.partner && (
                  <span className="gallery-partner-tag">
                    {product.partner}
                  </span>
                )}
              </div>

              {/* Thumbnails list if multiple images exist */}
              {galleryImages.length > 1 && (
                <div className="product-thumbnails-list">
                  {galleryImages.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`product-thumbnail-btn ${activeImage === imgSrc ? 'active' : ''}`}
                      onClick={() => setActiveImage(imgSrc)}
                      aria-label={`View product image ${idx + 1}`}
                    >
                      <img src={imgSrc} alt={`${product.name} thumbnail ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              )}

              {/* Trust badges below gallery */}
              <div className="product-trust-badges">
                <div className="trust-badge-item">
                  <ShieldCheck size={20} className="text-primary" />
                  <div>
                    <strong>Industrial Grade</strong>
                    <span>ISO 9001 Certified Quality</span>
                  </div>
                </div>
                <div className="trust-badge-item">
                  <Truck size={20} className="text-primary" />
                  <div>
                    <strong>Pan-India & Global</strong>
                    <span>Ahmedabad, Goa, Rajkot, Gandhidham</span>
                  </div>
                </div>
                <div className="trust-badge-item">
                  <Package size={20} className="text-primary" />
                  <div>
                    <strong>Custom Formats</strong>
                    <span>Tailored sizes & bulk packaging</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info & Actions */}
          <div className="product-info-column">
            <div className="product-header-group">
              <div className="product-meta-tags">
                <span className="category-pill">{product.category}</span>
                <span className="subcategory-pill">{product.subcategory}</span>
                {product.partner && (
                  <span className="partner-pill">
                    <Sparkles size={13} style={{ display: 'inline', marginRight: '4px' }} />
                    {product.partner}
                  </span>
                )}
              </div>

              <h1 className="product-title">{product.name}</h1>
              <p className="product-short-summary">{product.shortDesc}</p>
            </div>

            {/* Quick Action Area */}
            <div className="product-action-box">
              <div className="action-button-group">
                <EnquiryFormDialog
                  productName={product.name}
                  trigger={
                    <Button size="lg" className="btn-enquire-primary">
                      <MessageSquare size={18} /> Request Instant Quote
                    </Button>
                  }
                />

                <a 
                  href="/images/For Website/Vir Engineers.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-download-catalog"
                >
                  <Download size={18} /> Technical Brochure (PDF)
                </a>

                <button 
                  onClick={handleShare}
                  className="btn btn-secondary-icon"
                  title="Share product"
                  aria-label="Share product"
                >
                  <Share2 size={18} />
                  <span>{isCopied ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>

              <div className="consult-specialist-banner">
                <PhoneCall size={20} className="text-primary" />
                <div className="consult-text">
                  <span>Speak with our Packaging Application Engineer:</span>
                  <a href="tel:+918980330315"><strong>+91 89803 30315</strong></a> / <a href="tel:+919824444481"><strong>+91 98244 44481</strong></a>
                </div>
              </div>
            </div>

            {/* Key Highlights Card */}
            <div className="product-highlights-box">
              <h3>Key Highlights</h3>
              <div className="highlights-grid">
                <div className="highlight-item">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span>Heavy-Duty Protection</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span>Export & Marine Tested</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span>Custom Dimensions Available</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span>Compliant & Eco-Optimized</span>
                </div>
              </div>
            </div>

            {/* Structured Tabs (Overview, Specifications, Features, Applications) */}
            <div className="product-tabs-container">
              <div className="product-tabs-nav" role="tablist">
                <button 
                  className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                  role="tab"
                  aria-selected={activeTab === 'overview'}
                >
                  Overview & Description
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
                  onClick={() => setActiveTab('specs')}
                  role="tab"
                  aria-selected={activeTab === 'specs'}
                >
                  Technical Specifications
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                  onClick={() => setActiveTab('features')}
                  role="tab"
                  aria-selected={activeTab === 'features'}
                >
                  Features & Benefits
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'applications' ? 'active' : ''}`}
                  onClick={() => setActiveTab('applications')}
                  role="tab"
                  aria-selected={activeTab === 'applications'}
                >
                  Applications
                </button>
              </div>

              <div className="product-tab-content-panel">
                {activeTab === 'overview' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="tab-pane-content"
                  >
                    <p className="detailed-desc-text">{product.fullDesc || product.shortDesc}</p>
                    
                    <div className="overview-features-summary">
                      <h4>Why choose Vir Engineers for {product.name}?</h4>
                      <ul>
                        <li>Backed by 28+ years of packaging engineering and supply chain leadership.</li>
                        <li>Global partnership standards ensuring zero-defect quality and consistent performance.</li>
                        <li>Turnkey consultation to optimize your packaging line and reduce total shipping costs.</li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'specs' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="tab-pane-content"
                  >
                    {product.specifications && Object.keys(product.specifications).length > 0 ? (
                      <div className="specs-table-wrapper">
                        <table className="specs-table">
                          <tbody>
                            {Object.entries(product.specifications).map(([key, value], idx) => (
                              <tr key={idx}>
                                <td className="spec-key">{key}</td>
                                <td className="spec-value">{value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p style={{ color: '#94a3b8' }}>Contact us for specific custom tolerance datasheets and testing standards.</p>
                    )}
                  </motion.div>
                )}

                {activeTab === 'features' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="tab-pane-content"
                  >
                    {product.features && product.features.length > 0 ? (
                      <ul className="features-bullet-list">
                        {product.features.map((feature, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={18} className="feature-check-icon text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p style={{ color: '#94a3b8' }}>Engineered for high performance, reliability, and cost-efficiency.</p>
                    )}
                  </motion.div>
                )}

                {activeTab === 'applications' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="tab-pane-content"
                  >
                    {product.applications && product.applications.length > 0 ? (
                      <div className="applications-grid">
                        {product.applications.map((app, idx) => (
                          <div key={idx} className="application-card">
                            <Building2 size={20} className="text-primary" />
                            <span>{app}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p style={{ color: '#94a3b8' }}>Suitable for automotive, heavy machinery, logistics, and electronics manufacturing.</p>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="related-products-section">
            <div className="section-header-row">
              <div>
                <h2>Related <span className="text-primary">Industrial Solutions</span></h2>
                <p>Complementary packaging products frequently paired with {product.name}</p>
              </div>
              <Link to="/products" state={{ activeTab: product.category }} className="btn btn-outline btn-sm">
                View All {product.category} →
              </Link>
            </div>

            <div className="sub-products-grid" style={{ marginTop: '24px' }}>
              {relatedProducts.map((relProd) => (
                <motion.div
                  key={relProd.id}
                  className="sub-product-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={`/products/${relProd.slug}`} className="sub-product-image">
                    <img src={relProd.img} alt={relProd.name} />
                  </Link>
                  <div className="sub-product-content">
                    <Link to={`/products/${relProd.slug}`}>
                      <h3>{relProd.name}</h3>
                    </Link>
                    <p>{relProd.shortDesc}</p>
                    <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <Link to={`/products/${relProd.slug}`} className="btn btn-outline btn-sm" style={{ flex: 1, textAlign: 'center' }}>
                        View Details
                      </Link>
                      <EnquiryFormDialog
                        productName={relProd.name}
                        trigger={
                          <Button variant="default" size="sm" className="px-4 font-semibold">
                            Enquire
                          </Button>
                        }
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Consultation CTA Banner */}
        <div className="product-bottom-cta-banner">
          <div className="cta-banner-content">
            <h2>Need Custom Sizing, Large Volume Orders, or Turnkey Packaging Audits?</h2>
            <p>Our engineering team can evaluate your current packing process and recommend optimized materials that reduce transit damage and lower shipping costs.</p>
          </div>
          <div className="cta-banner-actions">
            <EnquiryFormDialog
              productName={product.name}
              trigger={
                <Button size="lg" className="btn btn-primary">
                  Request Custom Quote
                </Button>
              }
            />
            <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              Contact Our Engineers
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {isImageZoomed && (
          <motion.div 
            className="image-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageZoomed(false)}
          >
            <motion.div 
              className="image-lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={activeImage || product.img} alt={product.name} />
              <button 
                className="lightbox-close-btn" 
                onClick={() => setIsImageZoomed(false)}
                aria-label="Close zoomed view"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
