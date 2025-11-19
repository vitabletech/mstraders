import Link from 'next/link';
import Image from 'next/image';
import styles from './gallery.module.css';

export const metadata = {
    title: "Gallery | MS Traders",
    description: "View our completed projects and product gallery.",
};

export default function Gallery() {
    const items = [
        { title: "Petrol Pump Canopy Project A", image: "/images/service-canopy.png" },
        { title: "Modern Driveway Installation", image: "/images/service-pavers.png" },
        { title: "Industrial Yard Lighting", image: "/images/service-lights.png" },
        { title: "Electrical Control Room", image: "/images/service-electrical.png" },
        { title: "Digital Inflator Unit", image: "/images/service-inflator.png" },
        { title: "Commercial Water Cooler", image: "/images/service-cooler.png" },
        { title: "Canopy Structure Detail", image: "/images/gallery-canopy-detail.png" },
        { title: "Paver Block Patterns", image: "/images/gallery-paver-pattern.png" },
    ];

    return (
        <>
            <div className={styles.header}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '800' }}>Our Gallery</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>A showcase of our excellence and craftsmanship.</p>
                </div>
            </div>

            <div className="container">
                <div className={styles.galleryGrid}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.galleryItem}>
                            <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className={styles.overlay}>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{
                    textAlign: 'center',
                    padding: '5rem 2rem',
                    background: 'linear-gradient(135deg, #2A1F1B 0%, #1a1210 100%)',
                    borderRadius: '24px',
                    marginBottom: '4rem',
                    color: 'white',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}>
                    <h2 className="section-title" style={{ color: 'white' }}>3D Virtual Tour</h2>
                    <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Experience our projects in immersive 3D.</p>
                    <Link href="/virtual-tour" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                        Launch 3D Gallery
                    </Link>
                </div>
            </div>
        </>
    );
}
