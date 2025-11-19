import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>MS TRADERS</h3>
                    <p>Specialized petrol pump contractors in Gwalior. Complete turnkey solutions for canopy installation, electrical panels, lighting, driveways, and fuel station infrastructure.</p>
                </div>

                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <ul className={styles.links}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/gallery">Gallery</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Services</h3>
                    <ul className={styles.links}>
                        <li><Link href="/services#canopy">Petrol Pump Canopy</Link></li>
                        <li><Link href="/services#driveway">Driveway Paver Blocks</Link></li>
                        <li><Link href="/services#lights">Yard Lights</Link></li>
                        <li><Link href="/services#electrical">Electrical Panels</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Contact Us</h3>
                    <ul className={styles.contactInfo}>
                        <li>Near Indian Oil Depot, Rayru Baraua Road, Gwalior, M.P.</li>
                        <li>+91 8959014819</li>
                        <li>info@vitabletech.in</li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} MS Traders. All rights reserved.</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
                    Part of <a href="https://vitabletech.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>VitableTech</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
