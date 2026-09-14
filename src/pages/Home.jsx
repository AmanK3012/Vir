import React, { useEffect } from 'react';
import { Quote, Shield, DollarSign, Zap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Industrial Solutions Data
const industrialSolutions = [
  {
    title: "Corrosion Control Solutions",
    img: "/images/Website Images/Corrosion Solutions/Zerust VCI paper.jpg",
    tab: "Corrosion Control Solutions"
  },
  {
    title: "Moisture Control Solutions",
    img: "/images/Website Images/Moisture Control Solutions/Container Desiccant.jpg",
    tab: "Moisture Control Solutions"
  },
  {
    title: "Load Stabilizing Solutions",
    img: "/images/Air-Dunnage-Bags.jpg",
    tab: "Load Stabilizing Solutions"
  },
  {
    title: "Protective Packaging Solutions",
    img: "/images/For Website/PET_Strap-removebg-preview.png",
    tab: "Protective Packaging Solutions"
  },
  {
    title: "Storage & Material Handling",
    img: "/images/For Website/MHE/Forklift.png",
    tab: "Storage & Material Handling"
  },
  {
    title: "Speciality Tapes",
    img: "https://images.unsplash.com/photo-1527334919515-b8dee906a337?q=80&w=800&auto=format&fit=crop",
    tab: "Speciality Tapes"
  },
  {
    title: "Packaging Essentials",
    img: "/images/Website Images/Moisture Control Solutions/HI Card.jpg",
    tab: "Packaging Essentials"
  }
];

export default function Home() {
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
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container" style={{ position: 'relative', height: '100%', width: '100%' }}>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero-title">
              PROTECTING YOUR HIGH-VALUE <span className="text-primary">ASSETS.</span>
            </h1>
            <p className="hero-text">
              India's preferred industrial packaging partner. Delivering precise, authoritative solutions for global supply chains.
            </p>
            <div className="hero-actions" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/products" className="btn btn-primary">Explore Solutions</Link>
              <Link to="/contact" className="btn btn-outline">Contact Our Experts</Link>
              <a 
                href="/images/For Website/Vir Engineers.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <FileText size={18} /> Download Catalog
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Bar Overlay */}
        <div className="stats-bar">
          <div className="container stats-grid">
            <div className="stat-item">
              <div className="stat-num">28+</div>
              <div className="stat-text">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">4</div>
              <div className="stat-text">Strategic Branches</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">360°</div>
              <div className="stat-text">Packaging Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineered to Protect Section */}
      <section className="engineered-section">
        <div className="container engineered-grid">
          <div className="engineered-content fade-in-section">
            <h2>ENGINEERED TO <span className="text-primary">PROTECT.</span></h2>
            <p>
              For over 28 years, Vir Engineers has been at the forefront of industrial packaging innovation. We provide a full spectrum of packaging services with the deep technical knowledge and manufacturing capacity to meet your most demanding requirements.
            </p>
            <p>
              We go beyond just supplying materials. We apply science and innovation to reduce your overall packaging costs, dramatically improve the arrival condition of your products, and make your shipping operations more productive.
            </p>
          </div>
          <div className="engineered-image fade-in-section delay-200">
            <img src="/strapping.jpg" alt="Heavy duty pallet strapping" />
            <div className="quote-box">
              <Quote className="quote-icon" size={32} />
              <div className="quote-text">
                "Industrial engineers and procurement managers trust us to protect high-value goods globally."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Solutions */}
      <section className="solutions-section">
        <div className="container">
          <h2 className="section-title fade-in-section">Industrial Solutions</h2>
          <p className="section-subtitle fade-in-section">High-performance packaging systems engineered for reliability, safety, and operational efficiency across global supply chains.</p>
          
          <div className="solutions-grid">
            {industrialSolutions.map((sol, idx) => (
              <Link 
                key={idx} 
                to="/products" 
                state={{ activeTab: sol.tab }}
                className={`solution-card fade-in-section delay-${((idx % 3) + 1) * 100}`}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div className="solution-image">
                  <img src={sol.img} alt={sol.title} />
                </div>
                <div className="solution-footer">
                  <h3>{sol.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Banner */}
      <section className="parallax-banner">
        <div className="container">
          <h2 className="fade-in-section">Committed to Excellence.</h2>
        </div>
      </section>

      {/* Why Partner With Vir */}
      <section className="partner-section">
        <div className="container">
          <h2 className="section-title fade-in-section">WHY PARTNER WITH <span className="text-primary">VIR</span></h2>
          <p className="section-subtitle fade-in-section">We bring decades of manufacturing excellence to solve your toughest packaging challenges.</p>
          
          <div className="partner-grid">
            <div className="partner-card fade-in-section delay-100">
              <div className="partner-icon-wrapper">
                <Shield size={36} />
              </div>
              <h3>Uncompromising Quality</h3>
              <p>Rigorous standards and high-grade materials ensure your assets are protected against transit damage, moisture, and impact.</p>
            </div>
            
            <div className="partner-card fade-in-section delay-200">
              <div className="partner-icon-wrapper">
                <DollarSign size={36} />
              </div>
              <h3>Cost Optimization</h3>
              <p>Our engineered solutions reduce material waste and optimize dimensional weight, directly lowering your total cost of logistics.</p>
            </div>

            <div className="partner-card fade-in-section delay-300">
              <div className="partner-icon-wrapper">
                <Zap size={36} />
              </div>
              <h3>Operational Efficiency</h3>
              <p>We provide ergonomic tools and semi-automated machinery to dramatically speed up your end-of-line packaging operations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
