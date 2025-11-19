import styles from './about.module.css';

export const metadata = {
    title: "About MS Traders | Experience & Expertise in Gwalior",
    description: "Learn about MS Traders' 10+ years of experience in delivering high-quality infrastructure solutions in Gwalior and Madhya Pradesh.",
    alternates: {
        canonical: '/about',
    },
};

export default function About() {
    return (
        <>
            <div className={styles.header}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About MS Traders</h1>
                    <p>Building Trust Through Quality and Innovation</p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className="section-title">Who We Are</h2>
                        <p className={styles.text}>
                            MS Traders is a specialized petrol pump contractor based in Gwalior, Madhya Pradesh. We provide complete turnkey solutions for fuel station infrastructure - from canopy installation and roofing to electrical panels, lighting systems, driveways, and water coolers. Our expertise lies in creating safe, weather-resistant, and visually appealing petrol pump setups.
                        </p>
                        <p className={styles.text}>
                            As experienced contractors, we handle every aspect of petrol pump construction and renovation. Our canopy structures are designed to protect customers and equipment from harsh weather while serving as prominent branding spaces. We use premium materials including steel and aluminum frames, weather-resistant roofing (metal sheeting, fiberglass, polycarbonate), and integrate modern LED lighting and signage systems.
                        </p>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>3+</span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>150+</span>
                            <span className={styles.statLabel}>Projects Completed</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statLabel}>Client Satisfaction</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.mission}>
                <div className="container">
                    <div className={styles.content}>
                        <h2 className={`${styles.missionTitle} section-title`}>Our Mission</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: '0.9' }}>
                            To be the leading petrol pump contractor in Madhya Pradesh by delivering complete, safe, and high-quality fuel station infrastructure. We combine technical expertise with premium materials to create canopy structures, electrical systems, and facilities that protect your investment, enhance customer experience, and strengthen your brand presence.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
