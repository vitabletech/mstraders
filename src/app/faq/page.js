'use client';
import { useState } from 'react';
import styles from './faq.module.css';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            category: "General",
            questions: [
                {
                    q: "What services does MS Traders provide?",
                    a: "MS Traders is a specialized petrol pump contractor offering complete turnkey solutions including canopy installation, roofing structures, electrical panel setup, yard lighting systems, driveway paver blocks, digital air inflators, and water coolers. We handle everything from new petrol pump setup to renovation projects."
                },
                {
                    q: "Where are you located and which areas do you serve?",
                    a: "We are based in Gwalior, Madhya Pradesh (Near Indian Oil Depot, Rayru Baraua Road). We primarily serve Gwalior and surrounding areas in MP, and can take on projects across Madhya Pradesh for larger installations."
                },
                {
                    q: "How can I get a quote for my petrol pump project?",
                    a: "You can request a quote by calling us at +91-8959014819, emailing info@vitabletech.in, or using our WhatsApp inquiry form on the Contact page. We'll schedule a site visit to assess your requirements and provide a detailed quotation."
                }
            ]
        },
        {
            category: "Petrol Pump Canopy",
            questions: [
                {
                    q: "What materials do you use for canopy construction?",
                    a: "We use high-grade steel and aluminum for the frame structure, and offer multiple roofing options including metal sheeting, fiberglass, and polycarbonate panels. All materials are weather-resistant and designed for long-lasting durability in harsh conditions."
                },
                {
                    q: "What canopy designs are available?",
                    a: "We offer flat, sloped, and curved canopy designs. Each can be customized to match your brand requirements and integrated with LED lighting, brand signage, and promotional displays. The design is chosen based on your site layout, weather conditions, and aesthetic preferences."
                },
                {
                    q: "How does a canopy protect my petrol pump?",
                    a: "Our canopy structures provide comprehensive weather protection by shielding customers and fuel dispensers from sun, rain, and harsh elements. They also enhance safety by covering the fueling area, improve visibility for drivers, and serve as prominent branding spaces with integrated signage and lighting."
                },
                {
                    q: "How long does canopy installation take?",
                    a: "A typical canopy installation takes 2-4 weeks depending on the size and complexity of the project. This includes site preparation, frame installation, roofing, electrical work for lighting, and signage integration. We provide a detailed timeline during the quotation phase."
                },
                {
                    q: "Are your canopy installations safety compliant?",
                    a: "Yes, all our installations meet safety standards and regulations. We use fire-resistant materials, ensure proper electrical grounding, and follow all safety protocols for fuel station infrastructure. Our designs prioritize customer safety and equipment protection."
                }
            ]
        },
        {
            category: "Electrical & Lighting",
            questions: [
                {
                    q: "What electrical services do you provide for petrol pumps?",
                    a: "We supply and install electrical panels, distribution boards, control panels, and automation systems. Our electrical solutions are safety-compliant, custom-configured for your needs, and designed for easy maintenance and industrial-grade performance."
                },
                {
                    q: "What type of lighting systems do you install?",
                    a: "We install LED yard lights, high-mast lights, pole lights, and decorative lighting suitable for petrol pumps and commercial complexes. Our lighting solutions are energy-efficient, provide wide coverage, and feature durable poles designed for outdoor conditions."
                },
                {
                    q: "Can you integrate lighting with the canopy structure?",
                    a: "Absolutely! We specialize in integrating LED lighting systems directly into canopy structures. This includes perimeter lighting, under-canopy illumination, and accent lighting for brand signage, creating excellent visibility for customers day and night."
                }
            ]
        },
        {
            category: "Other Services",
            questions: [
                {
                    q: "What types of paver blocks do you offer for driveways?",
                    a: "We provide premium interlocking paver blocks in various designs, colors, and textures. Our pavers are heavy load-bearing, suitable for high-traffic areas, available in multiple patterns, and require low maintenance. They're perfect for petrol pump driveways and parking areas."
                },
                {
                    q: "Do you supply and install digital air inflators?",
                    a: "Yes, we provide state-of-the-art digital air inflators with digital displays, auto cut-off features, weatherproof bodies, and high accuracy. These machines enhance customer service at your petrol pump and are built for durability."
                },
                {
                    q: "What water cooler solutions do you offer?",
                    a: "We supply industrial and commercial water cooling systems with fast cooling, stainless steel bodies, hygienic design, and energy-saving features. These are ideal for petrol pumps, public places, and commercial facilities."
                }
            ]
        },
        {
            category: "Project & Pricing",
            questions: [
                {
                    q: "Do you handle complete petrol pump setup from scratch?",
                    a: "Yes! As specialized petrol pump contractors, we provide complete turnkey solutions. We handle everything from canopy and roofing installation to electrical panels, lighting, driveways, water coolers, and air inflators. You get a one-stop solution for your entire petrol pump infrastructure."
                },
                {
                    q: "What is the typical cost of a canopy installation?",
                    a: "Costs vary based on size, design complexity, materials chosen, and additional features like lighting and signage. We provide transparent, detailed quotations after a site visit. Contact us for a free consultation and customized quote."
                },
                {
                    q: "Do you offer warranties on your installations?",
                    a: "Yes, we provide warranties on both materials and workmanship. The warranty period varies by service and materials used. Specific warranty details are included in your project contract."
                },
                {
                    q: "Can you work on existing petrol pump renovations?",
                    a: "Absolutely! We handle both new installations and renovation projects. Whether you need to upgrade your canopy, replace lighting, install new electrical panels, or modernize your facility, we can help."
                },
                {
                    q: "What are your payment terms?",
                    a: "Payment terms are discussed during the quotation phase and typically include an advance payment, progress payments during installation, and final payment upon completion. We offer flexible payment schedules for larger projects."
                }
            ]
        },
        {
            category: "Contact & Support",
            questions: [
                {
                    q: "What are your business hours?",
                    a: "We are open Monday to Saturday from 10:30 AM to 10:00 PM. You can call us, email, or send a WhatsApp message during these hours. For urgent inquiries, please call directly."
                },
                {
                    q: "Do you provide after-sales support?",
                    a: "Yes, we provide comprehensive after-sales support including maintenance guidance, troubleshooting assistance, and repair services. Our team is available to address any concerns even after project completion."
                },
                {
                    q: "How quickly can you start a project?",
                    a: "Project start times depend on our current workload and your site readiness. Typically, we can begin within 1-2 weeks after contract signing and advance payment. For urgent projects, we can expedite the timeline."
                }
            ]
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    let globalIndex = 0;

    return (
        <>
            <div className={styles.header}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Frequently Asked Questions</h1>
                    <p>Find answers to common questions about our petrol pump contractor services.</p>
                </div>
            </div>

            <section className={styles.faqSection}>
                <div className="container">
                    {faqs.map((category, catIndex) => (
                        <div key={catIndex} className={styles.categorySection}>
                            <h2 className={styles.categoryTitle}>{category.category}</h2>
                            <div className={styles.faqList}>
                                {category.questions.map((faq, qIndex) => {
                                    const currentIndex = globalIndex++;
                                    return (
                                        <div key={qIndex} className={styles.faqItem}>
                                            <button
                                                className={`${styles.faqQuestion} ${openIndex === currentIndex ? styles.active : ''}`}
                                                onClick={() => toggleFAQ(currentIndex)}
                                            >
                                                <span>{faq.q}</span>
                                                <span className={styles.icon}>
                                                    {openIndex === currentIndex ? '−' : '+'}
                                                </span>
                                            </button>
                                            <div className={`${styles.faqAnswer} ${openIndex === currentIndex ? styles.open : ''}`}>
                                                <p>{faq.a}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    <div className={styles.ctaBox}>
                        <h3>Still have questions?</h3>
                        <p>Our team is here to help! Contact us for personalized assistance.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                            <a href="tel:+918959014819" className="btn btn-primary">Call Us</a>
                            <a href="/contact" className="btn btn-outline text-white">Send Inquiry</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
