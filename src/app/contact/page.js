import { Suspense } from 'react';
import styles from './contact.module.css';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: "Contact MS Traders | Get a Quote Today",
    description: "Contact MS Traders for enquiries about Petrol Pump Canopies, Pavers, and Industrial Solutions. Call +91-8959014819 or WhatsApp us.",
    alternates: {
        canonical: '/contact',
    },
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
                            <p>info@vitabletech.in</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.icon}>⏰</div>
                        <div className={styles.details}>
                            <h3>Opening Hours</h3>
                            <p>10:30 AM - 10:00 PM</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Suspense fallback={<div>Loading form...</div>}>
                        <ContactForm />
                    </Suspense>
                </div>
            </div>
        </>
    );
}
