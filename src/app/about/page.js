import styles from './about.module.css';

export const metadata = {
    title: "About Us | MS Traders",
    description: "Learn about MS Traders, our history, mission, and commitment to quality in construction and industrial solutions.",
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
                            MS Traders is a premier provider of construction and industrial solutions, specializing in Petrol Pump Canopies, Driveway Paver Blocks, Yard Lights, and Electrical Panels. With years of experience in the industry, we have established ourselves as a trusted name known for quality, durability, and excellence.
                        </p>
                        <p className={styles.text}>
                            Our journey began with a simple mission: to deliver top-notch infrastructure solutions that stand the test of time. Today, we are proud to serve a diverse clientele, ranging from petrol pump owners to large industrial complexes, providing them with tailored solutions that meet their specific needs.
                        </p>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>10+</span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>500+</span>
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
                            To revolutionize the infrastructure sector by providing innovative, sustainable, and high-quality solutions that empower businesses to grow. We strive to exceed customer expectations through continuous improvement and a commitment to excellence.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
