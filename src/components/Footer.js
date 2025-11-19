import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>MS TRADERS</h3>
                    <p>Premium quality Petrol Pump Canopies, Driveway Paver Blocks, and Electrical solutions. Building trust with quality since inception.</p>
                </div>

                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <ul className={styles.links}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/gallery">Gallery</Link></li>
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
                        <li>info@mstraders.com</li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} MS Traders. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
