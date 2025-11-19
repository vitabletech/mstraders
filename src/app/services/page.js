import Link from 'next/link';
import styles from './services.module.css';

export const metadata = {
    title: "Our Services | MS Traders",
    description: "Explore our premium services including Petrol Pump Canopies, Driveway Paver Blocks, Yard Lights, and more.",
};

export default function Services() {
    const services = [
        {
            id: "canopy",
            title: "Petrol Pump Canopy",
            desc: "We specialize in designing and constructing durable, high-quality canopies for petrol stations. Our canopies are engineered to withstand harsh weather conditions while providing a modern and professional look to your station.",
            features: ["Custom Designs", "Weather Resistant", "High Durability", "Modern Aesthetics"],
            image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "driveway",
            title: "Driveway (Paver Blocks)",
            desc: "Transform your driveways with our premium paver blocks. Available in various designs, colors, and textures, our pavers are perfect for heavy traffic areas and enhance the curb appeal of your property.",
            features: ["Interlocking Pavers", "Heavy Load Bearing", "Variety of Patterns", "Low Maintenance"],
            image: "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "lights",
            title: "Yard Lights",
            desc: "Illuminate your outdoor spaces with our efficient yard lighting solutions. We provide high-mast lights, pole lights, and decorative lighting suitable for industrial yards, petrol pumps, and commercial complexes.",
            features: ["LED Technology", "Energy Efficient", "Wide Coverage", "Durable Poles"],
            image: "https://images.unsplash.com/photo-1510511233900-1982d92bd835?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "electrical",
            title: "Electrical Panels",
            desc: "Our electrical panels are designed for safety and efficiency. We supply and install control panels, distribution boards, and automation panels tailored to your specific industrial requirements.",
            features: ["Safety Compliant", "Custom Configuration", "Easy Maintenance", "Industrial Grade"],
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "inflator",
            title: "Digital Air Inflator",
            desc: "State-of-the-art digital air inflators for petrol pumps and service stations. Accurate, easy to use, and durable machines that provide a premium service experience to your customers.",
            features: ["Digital Display", "Auto Cut-off", "Weatherproof Body", "High Accuracy"],
            image: "https://images.unsplash.com/photo-1565690827396-363c44053a9a?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "cooler",
            title: "Water Cooler",
            desc: "Industrial and commercial water cooling systems designed to provide chilled water efficiently. Perfect for public places, institutions, and industrial facilities.",
            features: ["Fast Cooling", "Stainless Steel Body", "Hygienic Design", "Energy Saving"],
            image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=2070&auto=format&fit=crop"
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
