"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    MS <span>TRADERS</span>
                </Link>

                <ul className={styles.navLinks}>
                    <li><Link href="/" className={styles.navLink}>Home</Link></li>
                    <li><Link href="/services" className={styles.navLink}>Services</Link></li>
                    <li><Link href="/about" className={styles.navLink}>About Us</Link></li>
                    <li><Link href="/gallery" className={styles.navLink}>Gallery</Link></li>
                    <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
                </ul>

                <div className={styles.cta}>
                    <Link href="/contact" className="btn btn-primary">Get Quote</Link>
                </div>

                <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                </button>
            </div>

            <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                <ul className={styles.mobileNavLinks}>
                    <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link href="/services" onClick={toggleMenu}>Services</Link></li>
                    <li><Link href="/about" onClick={toggleMenu}>About Us</Link></li>
                    <li><Link href="/gallery" onClick={toggleMenu}>Gallery</Link></li>
                    <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
