import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blog from './pages/Blog';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import PageTransition from './components/PageTransition';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize or route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Force solid navbar on subpages, transparent only on home hero
  const isHomePage = location.pathname === '/';
  const navClass = isScrolled || !isHomePage ? 'solid' : 'transparent';

  return (
    <div className="app">
      {/* Navbar - hidden on admin routes */}
      {!isAdminRoute && (
        <nav className={`navbar ${navClass} ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
          <div className="container navbar-inner">
            <div className="logo-container">
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src="/logo.png" alt="Vir Engineers Logo" style={{ height: '40px', width: 'auto', filter: (navClass === 'transparent' && !isMobileMenuOpen) ? 'brightness(0) invert(1)' : 'none' }} />
                <div className="logo-text-group">
                  <span className="logo-text">VIR ENGINEERS</span>
                  <span className="logo-subtext">Your Preferred Packaging Partner</span>
                </div>
              </Link>
            </div>
            
            <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><Link to="/products">PRODUCTS</Link></li>
              <li><Link to="/services">SERVICES</Link></li>
              <li><Link to="/blog">BLOG & MEDIA</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              <li className="mobile-only-quote">
                <Link to="/contact" className="btn btn-primary w-full">
                  Get a Quote <ArrowRight size={18} />
                </Link>
              </li>
            </ul>

            <div className="nav-desktop-action">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                <Link to="/contact" className="btn btn-primary">
                  Get a Quote <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>

            <button 
              className="mobile-menu-toggle" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      )}

      {/* Page Content */}
      <div className="page-content">
        <PageTransition>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </div>

      {/* Footer - hidden on admin routes */}
      {!isAdminRoute && (
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-about">
                <div className="footer-logo">
                  <img src="/logo.png" alt="Vir Engineers Logo" style={{ height: '32px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
                  VIR ENGINEERS
                </div>
                <p className="footer-desc">
                  Applying science and innovation to make a real impact in every person's life around the world through superior packaging.
                </p>
              </div>
              
              <div className="footer-links">
                <h4>Quick Links</h4>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/products">Products</Link>
                <Link to="/services">Services</Link>
                <Link to="/blog">Blog & Media</Link>
                <Link to="/contact">Contact</Link>
              </div>

              <div className="footer-links">
                <h4>Product Categories</h4>
                <Link to="/products" state={{ activeTab: "Corrosion Control Solutions" }}>Corrosion Control</Link>
                <Link to="/products" state={{ activeTab: "Moisture Control Solutions" }}>Moisture Control</Link>
                <Link to="/products" state={{ activeTab: "Load Stabilizing Solutions" }}>Load Stabilizing</Link>
                <Link to="/products" state={{ activeTab: "Protective Packaging Solutions" }}>Protective Packaging</Link>
                <Link to="/products" state={{ activeTab: "Storage & Material Handling" }}>Storage & MHE</Link>
                <Link to="/products" state={{ activeTab: "Speciality Tapes" }}>Speciality Tapes</Link>
                <Link to="/products" state={{ activeTab: "Packaging Essentials" }}>Packaging Essentials</Link>
              </div>

              <div className="footer-contact">
                <h4>Contact Us</h4>
                <div className="contact-row">
                  <MapPin size={20} />
                  <span>Ahmedabad, Gujarat, India</span>
                </div>
                <div className="contact-row">
                  <Phone size={20} />
                  <span>
                    <a href="tel:+918980330315" style={{ color: 'inherit' }}>+91 89803 30315</a><br/>
                    <a href="tel:+919824444481" style={{ color: 'inherit' }}>+91 98244 44481</a>
                  </span>
                </div>
                <div className="contact-row">
                  <Mail size={20} />
                  <span><a href="mailto:sales@virpackaging.com" style={{ color: 'inherit' }}>sales@virpackaging.com</a></span>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <div>&copy; {new Date().getFullYear()} Vir Engineers. All Rights Reserved.</div>
              <div className="footer-branches">
                Goa <span>|</span> Rajkot <span>|</span> Gandhidham
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;

