import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL('https://mstraders.vitabletech.in'),
  title: {
    default: "MS Traders | Petrol Pump Canopy & Industrial Solutions",
    template: "%s | MS Traders"
  },
  description: "Specialized petrol pump contractors in Gwalior, MP. Complete turnkey solutions for canopy installation, roofing, electrical panels, lighting, driveways, and fuel station infrastructure. Weather-resistant designs with premium materials.",
  keywords: ["Petrol Pump Contractor", "Canopy Installation", "Fuel Station Setup", "Petrol Pump Roofing", "Yard Lights", "Electrical Panels", "Gwalior Contractor", "MS Traders"],
  authors: [{ name: "MS Traders" }],
  creator: "MS Traders",
  publisher: "MS Traders",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MS Traders | Building Excellence",
    description: "Your trusted partner for Petrol Pump Canopies, Driveways, and Industrial Solutions.",
    url: 'https://mstraders.vitabletech.in',
    siteName: 'MS Traders',
    images: [
      {
        url: '/images/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'MS Traders Hero Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MS Traders | Industrial Solutions',
    description: 'Premium Petrol Pump Canopies and Construction Services in Gwalior.',
    images: ['/images/hero-bg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  // Additional SEO Meta Tags
  category: 'Construction & Industrial Services',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  // Geo-targeting for local SEO
  other: {
    'geo.region': 'IN-MP',
    'geo.placename': 'Gwalior',
    'geo.position': '26.2183;78.1828',
    'ICBM': '26.2183, 78.1828',
    'DC.title': 'MS Traders - Petrol Pump Contractor Gwalior',
    'rating': 'general',
    'distribution': 'global',
    'revisit-after': '7 days',
    'language': 'English',
    'coverage': 'Worldwide',
    'target': 'all',
    'HandheldFriendly': 'True',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export const viewport = {
  themeColor: '#C86A2E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MS Traders",
    "alternateName": "MS Traders Gwalior",
    "image": [
      "https://mstraders.vitabletech.in/logo.png",
      "https://mstraders.vitabletech.in/icon.png",
      "https://mstraders.vitabletech.in/images/hero-bg.png"
    ],
    "logo": "https://mstraders.vitabletech.in/logo.png",
    "description": "Specialized petrol pump contractors in Gwalior providing complete turnkey solutions for canopy installation, roofing, electrical panels, lighting, driveways, and fuel station infrastructure.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Indian Oil Depot, Rayru Baraua Road",
      "addressLocality": "Gwalior",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "474005",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.2183",
      "longitude": "78.1828"
    },
    "telephone": "+91-8959014819",
    "email": "info@vitabletech.in",
    "url": "https://mstraders.vitabletech.in",
    "sameAs": [
      "https://vitabletech.in"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:30",
      "closes": "22:00"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "26.2183",
        "longitude": "78.1828"
      },
      "geoRadius": "100000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Petrol Pump Infrastructure Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Petrol Pump Canopy Installation",
            "description": "Complete canopy installation with weather-resistant materials"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Panel Setup",
            "description": "Industrial-grade electrical panels and distribution boards"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Yard Lighting Systems",
            "description": "LED lighting and high-mast lights for commercial spaces"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('ServiceWorker registration successful');
                  },
                  function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
