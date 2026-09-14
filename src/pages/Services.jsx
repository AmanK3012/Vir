import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Anchor, Globe, Wind, Boxes, ShieldAlert, CheckCircle } from 'lucide-react';
import EnquiryFormDialog from '../components/EnquiryFormDialog';
import { Button } from '../components/ui/button';

const serviceData = [
  {
    id: "lashing",
    title: "Container Lashing Service",
    icon: Anchor,
    img: "/images/For Website/Packaging Solutions on turnkey basis/Container lashing.png",
    desc: "Professional securing and strapping of heavy-duty cargo inside shipping containers to prevent shifts, tipping, and transit damage during export.",
    details: [
      "High-strength composite webbing and lashing belts tailored for container loads",
      "Specialized heavy-duty buckles and heavy-tension ratchet systems",
      "Expert calculation of load center and tie-down configurations",
      "Perfect for industrial machinery, steel coils, and oversized equipment"
    ]
  },
  {
    id: "turnkey",
    title: "Export Worthy Packaging on Turnkey Basis",
    icon: Globe,
    img: "/images/For Website/Packaging Solutions on turnkey basis/Heavy Machinaries.png",
    desc: "End-to-end industrial packaging solutions managed on-site from engineering design to execution, ensuring your goods are ready for long-distance global transport.",
    details: [
      "Custom wooden palletizing and crate packaging manufactured at your facility",
      "ISPM-15 compliant, heat-treated wood materials for trouble-free customs clearance",
      "Full logistics assessment including dimensions and weight distribution",
      "Dedicated packaging team executing operations on your site"
    ]
  },
  {
    id: "vacuum",
    title: "Vacuum Packaging of Heavy Machinery",
    icon: Wind,
    img: "/images/For Website/Packaging Solutions on turnkey basis/Vacumm Packaging.png",
    desc: "Absolute moisture-proof barrier sealing using heavy-duty aluminium barrier foils and industrial vacuum systems, designed to preserve metal integrity.",
    details: [
      "Preserves sensitive electronics, engines, and machine tools from sea air and humidity",
      "Uses multi-layer heavy aluminum barrier foils for low moisture vapor transmission (MVTR)",
      "Accompanied by high-capacity bentonite clay desiccants to absorb internal moisture",
      "Prevents oxidation, mold, and water damage for up to several years in storage"
    ]
  },
  {
    id: "palletization",
    title: "Palletization Service",
    icon: Boxes,
    img: "/images/For Website/Packaging Solutions on turnkey basis/Palletization.png",
    desc: "Consolidation of loose boxes, components, or industrial goods onto pallets using structured layouts, heavy-duty wrapping, and corner reinforcements.",
    details: [
      "Optimized stack patterns to distribute load evenly and maximize container space",
      "Rigid corner board reinforcements to prevent strap crushing and increase stack strength",
      "Machine-applied stretch wrapping for weather and dust protection",
      "Improves fork truck handling efficiency and warehouse operations"
    ]
  },
  {
    id: "shrink",
    title: "Shrink Packaging of Pallet and Machinery",
    icon: ShieldAlert,
    img: "/images/For Website/Packaging Solutions on turnkey basis/Cargo Lashing.png",
    desc: "Heavy-gauge industrial heat shrink wrapping that contours perfectly to machinery of any size, establishing a weather-resistant protective shell.",
    details: [
      "High-thickness, UV-inhibited polyethylene films that shrink tightly under heat",
      "Provides a clean, dust-proof, and waterproof seal for outdoor storage or open-flatbed transit",
      "Forms a drum-tight barrier that resists high winds and extreme temperatures",
      "Protects complex machinery shapes without requiring heavy wooden boxes"
    ]
  }
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-services">
      {/* Services Hero */}
      <section className="services-hero">
        <div className="container">
          <motion.div
            className="services-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="tagline">TURNKEY SOLUTIONS</div>
            <h1>PACKAGING <span className="text-primary">SERVICES</span></h1>
            <p className="services-hero-desc">
              We do more than supply products. Our team provides complete packaging operations at your facility or ours, ensuring the safety of your assets globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list-section">
        <div className="container">
          <div className="services-grid">
            {serviceData.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.id}
                  className="service-detail-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="service-card-image" style={{ width: '100%', height: '180px', overflow: 'hidden', borderRadius: '8px 8px 0 0', marginBottom: '16px', background: '#f5f5f7' }}>
                    <img src={svc.img} alt={svc.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  <div className="card-header-row">
                    <div className="service-icon-box">
                      <Icon size={28} />
                    </div>
                    <h3>{svc.title}</h3>
                  </div>
                  
                  <p className="service-desc">{svc.desc}</p>
                  
                  <div className="service-bullet-points">
                    {svc.details.map((point, pIdx) => (
                      <div key={pIdx} className="bullet-row">
                        <CheckCircle size={16} className="text-primary shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-card-footer">
                    <EnquiryFormDialog
                      productName={svc.title}
                      trigger={
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                          <Button variant="default" className="w-full">
                            Book Service / Request Quote
                          </Button>
                        </motion.div>
                      }
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="services-cta-banner">
        <div className="container cta-banner-inner">
          <h2>Need On-Site Packaging Support?</h2>
          <p>Our engineering team can inspect your cargo, design the optimal packaging solution, and execute the lashing or vacuum packaging at your site anywhere in India.</p>
          <div style={{ marginTop: '24px' }}>
            <EnquiryFormDialog
              productName="General Turnkey Packaging Services"
              trigger={
                <Button variant="outline" className="btn-light">
                  Talk to a Service Engineer
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}
