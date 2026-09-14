import React, { useEffect } from 'react';
import { Target, Shield, MapPin, Building, Globe, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-about">
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero-content fade-in-section is-visible"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="tagline">OUR STORY</div>
            <h1>ENGINEERED FOR <span className="text-primary">IMPACT.</span></h1>
            <p className="about-hero-desc">
              Since our inception, Vir Engineers has been driven by a singular focus: protecting the world's most critical industrial assets through superior packaging technology and unparalleled manufacturing standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2 className="section-title fade-in-section" style={{textAlign: 'left'}}>OUR MISSION</h2>
          <div className="mission-grid">
            <div className="mission-features">
              <div className="mission-feature-card fade-in-section delay-100">
                <Target size={32} className="text-primary" />
                <h3>Innovation</h3>
                <p>Continuously pushing the boundaries of material science to create lighter, stronger packaging.</p>
              </div>
              <div className="mission-feature-card fade-in-section delay-200">
                <Shield size={32} className="text-primary" />
                <h3>Protection</h3>
                <p>Ensuring zero-defect transit and uncompromised arrival conditions for our clients globally.</p>
              </div>
            </div>
            <div className="mission-list fade-in-section delay-300">
              <ul>
                <li><CheckCircle size={20} className="text-primary" /> Optimize global supply chain logistics.</li>
                <li><CheckCircle size={20} className="text-primary" /> Reduce total cost of ownership for packaging.</li>
                <li><CheckCircle size={20} className="text-primary" /> Implement sustainable, reusable systems.</li>
                <li><CheckCircle size={20} className="text-primary" /> Maintain international compliance standards.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="infra-section">
        <div className="container">
          <h2 className="section-title fade-in-section">WORLD-CLASS INFRASTRUCTURE</h2>
          <p className="section-subtitle fade-in-section">State-of-the-art facilities designed for massive scale and precision.</p>
          <div className="infra-grid fade-in-section delay-200">
            <div className="infra-images">
              <img src="/hero.jpg" alt="Manufacturing Facility" className="infra-img-large" />
            </div>
            <div className="infra-text">
              <h3>Advanced Manufacturing Hubs</h3>
              <p>Our manufacturing footprint spans across India, equipped with fully automated production lines that guarantee precision and consistency across every batch of products we deliver.</p>
              <div className="infra-stats">
                <div className="i-stat">
                  <h4>100K+</h4>
                  <span>Sq. Ft. Facility</span>
                </div>
                <div className="i-stat">
                  <h4>24/7</h4>
                  <span>Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="presence-section">
        <div className="container">
          <h2 className="section-title fade-in-section">OUR PRESENCE</h2>
          <div className="presence-grid">
            <div className="presence-card dark fade-in-section delay-100">
              <Building size={32} className="text-primary mb-3" />
              <h3>CORPORATE OFFICE</h3>
              <p>Thaltej, Ahmedabad, Gujarat<br/>India - 380052</p>
            </div>
            <div className="presence-card light fade-in-section delay-200">
              <MapPin size={32} className="text-primary mb-3" />
              <h3>Goa Branch</h3>
              <p>Regional Distribution & Sales Hub</p>
            </div>
            <div className="presence-card light fade-in-section delay-300">
              <MapPin size={32} className="text-primary mb-3" />
              <h3>Rajkot Branch</h3>
              <p>Manufacturing & Logistics Center</p>
            </div>
            <div className="presence-card light fade-in-section delay-100">
              <MapPin size={32} className="text-primary mb-3" />
              <h3>Gandhidham Branch</h3>
              <p>Strategic Supply Chain & Port Logistics Hub</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
