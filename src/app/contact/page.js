import styles from './contact.module.css';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: "Contact Us | MS Traders",
    description: "Get in touch with MS Traders for quotes and enquiries about our services.",
};

export default function Contact() {
    return (
        <>
            <div className={styles.header}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h1>
                    <p>We are here to help you with your requirements.</p>
                </div>
            </div>

            <div className={styles.container}>
                <div>
                    <h2 className={styles.infoTitle}>Get In Touch</h2>

                    <div className={styles.infoItem}>
                        <div className={styles.icon}>📍</div>
                        <div className={styles.details}>
                            <h3>Visit Us</h3>
                            <p>Near Indian Oil Depot,<br />Rayru Baraua Road,<br />Gwalior, M.P.</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.icon}>📞</div>
                        <div className={styles.details}>
                            <h3>Call Us</h3>
                            <p>+91 8959014819</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.icon}>✉️</div>
                        <div className={styles.details}>
                            <h3>Email Us</h3>
                            <p>info@mstraders.com</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.icon}>⏰</div>
                        <div className={styles.details}>
                            <h3>Opening Hours</h3>
                            <p>10:30 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>

                <div>
                    <ContactForm />
                </div>
            </div>
        </>
    );
}
