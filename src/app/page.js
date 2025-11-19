import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.css';

export default function Home() {
  const services = [
    { title: "Petrol Pump Canopy", image: "/images/service-canopy.png", desc: "High-quality, durable canopy structures for petrol stations." },
    { title: "Driveway Paver Blocks", image: "/images/service-pavers.png", desc: "Premium paver blocks for durable and aesthetic driveways." },
    { title: "Yard Lights", image: "/images/service-lights.png", desc: "Efficient lighting solutions for large outdoor areas." },
    { title: "Electrical Panels", image: "/images/service-electrical.png", desc: "Safe and reliable electrical control panels." },
    { title: "Digital Air Inflator", image: "/images/service-inflator.png", desc: "Modern digital air inflation systems." },
    { title: "Water Cooler", image: "/images/service-cooler.png", desc: "Industrial grade water cooling systems." },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} animate-fade-in`}>
            Building Excellence with <span>MS Traders</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Your trusted partner for Petrol Pump Canopies, Driveways, and Industrial Solutions.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/services" className="btn btn-primary">Explore Services</Link>
            <Link href="/contact" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Get a Quote</Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">We provide top-tier construction and industrial solutions tailored to your needs.</p>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={`${styles.serviceCard} card-hover`}>
                <div className={styles.serviceImageContainer}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={styles.serviceImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                  <Link href="/services" style={{ color: 'var(--primary-orange)', fontWeight: '600', marginTop: 'auto' }}>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ background: 'var(--dark-brown)', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h2 className="section-title" style={{ color: 'white' }}>Experience the Future with AR</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Visualize our products in your space before you buy. Step into our virtual gallery.
            </p>

            <div className={styles.servicesGrid} style={{ marginTop: '2rem', width: '100%' }}>
              <div className={styles.serviceCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🕶️</div>
                  <h3 className={styles.serviceTitle} style={{ color: 'white' }}>3D Virtual Tour</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
                    Walk through our virtual showroom and explore our products in 3D.
                  </p>
                  <Link href="/virtual-tour" className="btn btn-primary">
                    Launch Virtual Tour
                  </Link>
                </div>
              </div>

              <div className={styles.serviceCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                  <h3 className={styles.serviceTitle} style={{ color: 'white' }}>AR Preview</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
                    Use your phone to place our canopies and pavers in your actual location.
                  </p>
                  <button className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }} disabled>
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <h2 className="section-title">Why Choose MS Traders?</h2>
          <div className={styles.whyChooseUs}>
            <div className={styles.feature}>
              <span className={styles.featureNumber}>01</span>
              <h3 className={styles.featureTitle}>Premium Quality</h3>
              <p>We use only the best materials for long-lasting durability.</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureNumber}>02</span>
              <h3 className={styles.featureTitle}>Expert Team</h3>
              <p>Our professionals have years of experience in the industry.</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureNumber}>03</span>
              <h3 className={styles.featureTitle}>On-Time Delivery</h3>
              <p>We value your time and ensure projects are completed on schedule.</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureNumber}>04</span>
              <h3 className={styles.featureTitle}>Modern Design</h3>
              <p>Aesthetically pleasing designs that stand out.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready to Transform Your Space?</h2>
          <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', position: 'relative', zIndex: 1 }}>Contact us today for a free consultation and quote.</p>
          <Link href="/contact" className={styles.ctaButton}>Contact Us Now</Link>
        </div>
      </section>
    </>
  );
}
