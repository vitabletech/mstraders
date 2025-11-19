import Link from 'next/link';
import styles from './services.module.css';

export const metadata = {
    title: "Our Services - Petrol Pump Canopy, Pavers, Electrical Panels | MS Traders",
    description: "Explore our premium services including Petrol Pump Canopies, Driveway Paver Blocks, Yard Lights, Digital Air Inflators, and Water Coolers.",
    alternates: {
        canonical: '/services',
    },
};

export default function Services() {
    const services = [
        {
            id: "canopy",
            title: "Petrol Pump Canopy",
            desc: "Complete canopy installation for petrol pumps - providing weather protection, safety, and brand visibility. Our roof structures cover fuel dispensers, shielding customers and equipment from sun, rain, and harsh elements. We design and install custom canopies with steel/aluminum frames and durable roofing (metal sheeting, fiberglass, polycarbonate) in flat, sloped, or curved designs. Integrated with LED lighting, brand signage, and promotional displays.",
            features: ["Weather-Resistant Structure", "Custom Frame Design", "Brand Integration", "Safety Compliant"],
            image: "/images/service-canopy.png"
        },
        {
            id: "driveway",
            title: "Driveway (Paver Blocks)",
            desc: "Transform your driveways with our premium paver blocks. Available in various designs, colors, and textures, our pavers are perfect for heavy traffic areas and enhance the curb appeal of your property.",
            features: ["Interlocking Pavers", "Heavy Load Bearing", "Variety of Patterns", "Low Maintenance"],
            image: "/images/service-pavers.png"
        },
        {
            id: "lights",
            title: "Yard Lights",
            desc: "Illuminate your outdoor spaces with our efficient yard lighting solutions. We provide high-mast lights, pole lights, and decorative lighting suitable for industrial yards, petrol pumps, and commercial complexes.",
            features: ["LED Technology", "Energy Efficient", "Wide Coverage", "Durable Poles"],
            image: "/images/service-lights.png"
        },
        {
            id: "electrical",
            title: "Electrical Panels",
            desc: "Our electrical panels are designed for safety and efficiency. We supply and install control panels, distribution boards, and automation panels tailored to your specific industrial requirements.",
            features: ["Safety Compliant", "Custom Configuration", "Easy Maintenance", "Industrial Grade"],
            image: "/images/service-electrical.png"
        },
        {
            id: "inflator",
            title: "Digital Air Inflator",
            desc: "State-of-the-art digital air inflators for petrol pumps and service stations. Accurate, easy to use, and durable machines that provide a premium service experience to your customers.",
            features: ["Digital Display", "Auto Cut-off", "Weatherproof Body", "High Accuracy"],
            image: "/images/service-inflator.png"
        },
        {
            id: "cooler",
            title: "Water Cooler",
            desc: "Industrial and commercial water cooling systems designed to provide chilled water efficiently. Perfect for public places, institutions, and industrial facilities.",
            features: ["Fast Cooling", "Stainless Steel Body", "Hygienic Design", "Energy Saving"],
            image: "/images/service-cooler.png"
        }
    ];

    return (
        <>
            <div className={styles.header}>
                <div className="container">
                    <h1 className={styles.headerTitle}>Our Services</h1>
                    <p>Comprehensive solutions for your industrial and commercial needs.</p>
                </div>
            </div>

            {services.map((service, index) => (
                <section key={index} id={service.id} className={styles.serviceSection}>
                    <div className={styles.serviceContainer}>
                        <div className={styles.serviceContent}>
                            <h2 className={styles.serviceTitle}>{service.title}</h2>
                            <p className={styles.serviceDesc}>{service.desc}</p>
                            <ul className={styles.featuresList}>
                                {service.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="btn btn-primary">
                                Get a Quote
                            </Link>
                        </div>
                        <div className={styles.serviceImage}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={service.image} alt={service.title} />
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
