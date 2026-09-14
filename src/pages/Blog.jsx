import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Button } from '../components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: "Understanding and Preventing Container Rain in Maritime Logistics",
    excerpt: "Container rain can cause severe mold, rust, and structural package collapse. Learn how Clariant Container Dri II calcium chloride desiccants secure global cargo shipments.",
    category: "Moisture Control",
    date: "June 25, 2026",
    readTime: "5 min read",
    img: "/moisture.jpg",
    content: "When shipping goods across ocean routes, cargo containers undergo extreme temperature fluctuations. During hot days, moisture evaporates inside the container; during cool nights, the temperature drops below the dew point, and moisture condenses on the cold container ceiling and walls. This condensation literally 'rains' down on the cargo, ruining boxes, promoting mold growth, and corroding metal parts. Using high-absorption calcium chloride desiccants like Clariant Container Dri II prevents this by locking away moisture as a solid gel, ensuring that cargo stays bone dry from factory to final warehouse."
  },
  {
    id: 2,
    title: "The Science of VCI: Why Zerust Leads in Corrosion Protection",
    excerpt: "Discover how volatile corrosion inhibitors create an invisible, atomic-level protective shield on metal surfaces to prevent rust without messy oil coatings.",
    category: "Corrosion Control",
    date: "May 18, 2026",
    readTime: "4 min read",
    img: "/void-fill.jpg",
    content: "Traditional rust prevention involved dipping metal parts in heavy oils or greases, which had to be laboriously cleaned off at destination. Zerust Volatile Corrosion Inhibitors (VCI) work differently. VCI molecules volatilize out of the plastic film or paper wrapping, filling the packaging environment. These molecules deposit as an invisible, atomic-thin layer on all exposed metal surfaces. This barrier interrupts the electrochemical oxidation reaction that causes rust. Once unpacked, the VCI molecules safely evaporate, leaving the metal parts clean, dry, and immediately ready to use."
  },
  {
    id: 3,
    title: "Composite Strapping vs. Steel: Making the Safe Transition",
    excerpt: "Often called 'synthetic steel', polyester composite straps offer high strength, shock absorption, and zero risk of recoil injuries for packaging operators.",
    category: "Load Stabilizing",
    date: "April 09, 2026",
    readTime: "6 min read",
    img: "/strapping.jpg",
    content: "For decades, steel strapping was the default choice for heavy bundling. However, steel strap is heavy, difficult to handle, and dangerous to cut, with high spring-back recoil that can cause severe operator injuries. Composite strapping, made of high-tenacity polyester fibers bound in a polymer jacket, matches steel's load capacity but weighs a fraction of the amount. It has superior elasticity, absorbing high transit shocks without snapping, and is 'finger-friendly'—making it the safest packaging material upgrade for modern logistics lines."
  },
  {
    id: 4,
    title: "Choosing the Right Pallet: Injection Molded, Roto-Molded, or Compressed Wood?",
    excerpt: "A detailed engineering guide comparing the load capacities, lifetimes, and compliance benefits of modern warehouse pallet systems.",
    category: "Material Handling",
    date: "March 15, 2026",
    readTime: "7 min read",
    img: "/pallets.jpg",
    content: "Choosing the wrong pallet can lead to racked load collapses, hygiene issues, or customs delays. Injection-molded pallets offer perfect dimensional uniformity and are ideal for automated conveyor belts. Rotational (Roto) molded pallets are double-walled and filled with structural foam, making them incredibly impact-resistant for heavy steel parts. Compressed wooden pallets, made from recycled wood fibers under extreme heat and pressure, offer a low-cost, space-saving nestable option that complies natively with ISPM-15 export rules without requiring expensive fumigation."
  },
  {
    id: 5,
    title: "On-Site Turnkey Packaging: Reducing Total Cost of Ownership",
    excerpt: "How outsourcing your industrial packaging operations to dedicated engineering teams reduces material waste and logistics risks.",
    category: "Packaging Services",
    date: "February 28, 2026",
    readTime: "5 min read",
    img: "/hero.jpg",
    content: "Managing packaging lines internally consumes factory space, ties up capital in stock, and runs the risk of improper cargo lashing by untrained staff. Turnkey packaging services bring engineered packaging design, materials, and certified packers directly to your loading bay. By designing packaging tailored to the exact shipping container container dims and center of gravity, turnkey providers reduce oversized box costs, eliminate product transit damages, and speed up end-of-line container loading times."
  }
];

const categories = ["All", "Moisture Control", "Corrosion Control", "Load Stabilizing", "Material Handling", "Packaging Services"];

export default function Blog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const activeArticle = id ? blogPosts.find(post => post.id === parseInt(id)) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-blog">
      {/* Blog Hero */}
      <section className="blog-hero">
        <div className="container">
          <motion.div
            className="blog-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="tagline">VIR INSIGHTS</div>
            <h1>BLOG & <span className="text-primary">MEDIA</span></h1>
            <p className="blog-hero-desc">
              Stay updated with the latest in packaging engineering, global logistics compliance, and material science breakthroughs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Blog Container */}
      <section className="blog-content-section">
        <div className="container">
          
          {/* Filters and Search Bar */}
          <div className="blog-filters-row">
            <div className="category-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="blog-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Featured Post (Only show if 'All' is selected and search is empty) */}
          {selectedCategory === "All" && searchQuery === "" && !activeArticle && (
            <motion.div 
              className="featured-post-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="featured-image">
                <img src={blogPosts[0].img} alt={blogPosts[0].title} />
              </div>
              <div className="featured-content">
                <span className="post-tag">{blogPosts[0].category}</span>
                <h2>{blogPosts[0].title}</h2>
                <p>{blogPosts[0].excerpt}</p>
                <div className="post-meta">
                  <span><Calendar size={14} /> {blogPosts[0].date}</span>
                  <span><Clock size={14} /> {blogPosts[0].readTime}</span>
                </div>
                <Button 
                  variant="default"
                  onClick={() => navigate(`/blog/${blogPosts[0].id}`)}
                  style={{ marginTop: '20px' }}
                >
                  Read Article <ArrowRight size={16} />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Modal / Detailed view of the selected article */}
          <AnimatePresence>
            {activeArticle && (
              <motion.div 
                className="active-article-view"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/blog')}
                  style={{ marginBottom: '24px' }}
                >
                  &larr; Back to All Articles
                </Button>
                
                <div className="article-header">
                  <span className="post-tag">{activeArticle.category}</span>
                  <h1>{activeArticle.title}</h1>
                  <div className="post-meta" style={{ marginTop: '16px' }}>
                    <span><Calendar size={14} /> {activeArticle.date}</span>
                    <span><Clock size={14} /> {activeArticle.readTime}</span>
                  </div>
                </div>

                <div className="article-banner-img">
                  <img src={activeArticle.img} alt={activeArticle.title} />
                </div>

                <div className="article-body">
                  <p className="article-intro">{activeArticle.excerpt}</p>
                  <p className="article-text">{activeArticle.content}</p>
                  
                  <blockquote className="article-quote">
                    "Vir Engineers continues to partner with global leaders like Zerust and Clariant to ensure our clients have access to standard-compliant materials that prevent moisture and corrosion."
                  </blockquote>

                  <p className="article-text">
                    For customized packaging designs or to consult with our logistics engineers, contact us directly at sales@virpackaging.com. We provide full on-site packaging assessments and lashing audits.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Blog Grid */}
          {!activeArticle && (
            <div>
              {filteredPosts.length === 0 ? (
                <div className="no-posts-found">
                  <h3>No articles found</h3>
                  <p>Try resetting your search query or choosing another category filter.</p>
                </div>
              ) : (
                <div className="blog-grid">
                  {/* Skip index 0 if it's currently featured on landing */}
                  {filteredPosts
                    .filter((_, idx) => !(selectedCategory === "All" && searchQuery === "" && idx === 0))
                    .map((post, idx) => (
                      <motion.div
                        key={post.id}
                        className="blog-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        <div className="blog-card-img">
                          <img src={post.img} alt={post.title} />
                        </div>
                        <div className="blog-card-content">
                          <span className="post-tag">{post.category}</span>
                          <h3>{post.title}</h3>
                          <p>{post.excerpt}</p>
                          <div className="blog-card-footer">
                            <div className="post-meta">
                              <span><Calendar size={12} /> {post.date}</span>
                              <span><Clock size={12} /> {post.readTime}</span>
                            </div>
                            <button 
                              className="read-more-link"
                              onClick={() => navigate(`/blog/${post.id}`)}
                            >
                              Read More <ArrowRight size={14} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              )}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
