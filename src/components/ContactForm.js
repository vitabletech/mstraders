"use client";
import { useState } from 'react';
import styles from '../app/contact/contact.module.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, service, message } = formData;
        const text = `*New Enquiry from Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service Interested:* ${service}%0A*Message:* ${message}`;
        const whatsappUrl = `https://wa.me/918959014819?text=${text}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <form className={styles.formCard} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.input}
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={styles.input}
                    required
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="service">Service Interested In</label>
                <select
                    id="service"
                    name="service"
                    className={styles.input}
                    value={formData.service}
                    onChange={handleChange}
                >
                    <option value="">Select a Service</option>
                    <option value="Petrol Pump Canopy">Petrol Pump Canopy</option>
                    <option value="Driveway Paver Blocks">Driveway Paver Blocks</option>
                    <option value="Yard Lights">Yard Lights</option>
                    <option value="Electrical Panels">Electrical Panels</option>
                    <option value="Digital Air Inflator">Digital Air Inflator</option>
                    <option value="Water Cooler">Water Cooler</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>Send Enquiry via WhatsApp</button>
        </form>
    );
};

export default ContactForm;
