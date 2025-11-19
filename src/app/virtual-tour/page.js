'use client';
import Script from 'next/script';
import Link from 'next/link';
import { useState } from 'react';

export default function VirtualTour() {
    const [selectedModel, setSelectedModel] = useState('canopy');

    const models = {
        canopy: {
            title: "Petrol Pump Canopy",
            src: "https://modelviewer.dev/shared-assets/models/Astronaut.glb", // Placeholder
            desc: "Interactive 3D view of our premium canopy structure. (Demo Model)"
        },
        lights: {
            title: "Yard Lights",
            src: "https://modelviewer.dev/shared-assets/models/Astronaut.glb", // Placeholder
            desc: "High-mast lighting solution in 3D. (Demo Model)"
        },
        cooler: {
            title: "Water Cooler",
            src: "https://modelviewer.dev/shared-assets/models/Astronaut.glb", // Placeholder
            desc: "Industrial water cooler unit. (Demo Model)"
        }
    };

    return (
        <>
            <Script
                type="module"
                src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"
            />

            <div style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #1a1210 0%, #2A1F1B 100%)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>

                    <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>3D Virtual Tour</h1>
                            <p style={{ color: '#ccc' }}>Experience our products in immersive 3D / AR.</p>
                        </div>
                        <Link href="/" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
                            ← Back to Home
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem', flexGrow: 1, minHeight: '60vh' }}>
                        {/* Sidebar */}
                        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--primary-orange)' }}>Select Product</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {Object.entries(models).map(([key, model]) => (
                                    <button
                                        key={key}
                                        onClick={() => setSelectedModel(key)}
                                        style={{
                                            background: selectedModel === key ? 'var(--primary-orange)' : 'transparent',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            color: 'white',
                                            padding: '12px',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            transition: 'all 0.3s ease',
                                            fontWeight: selectedModel === key ? 'bold' : 'normal'
                                        }}
                                    >
                                        {model.title}
                                    </button>
                                ))}
                            </div>

                            <div style={{ marginTop: '3rem', padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', fontSize: '0.9rem', color: '#aaa' }}>
                                <strong>Note for Admin:</strong>
                                <p style={{ marginTop: '0.5rem' }}>
                                    To update these models, place your <code>.glb</code> files in the <code>public/models/</code> folder and update the paths in <code>src/app/virtual-tour/page.js</code>.
                                </p>
                            </div>
                        </div>

                        {/* Viewer */}
                        <div style={{
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h2 style={{ fontSize: '1.5rem' }}>{models[selectedModel].title}</h2>
                                <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem' }}>
                                    AR Enabled
                                </span>
                            </div>

                            <div style={{ flexGrow: 1, position: 'relative', minHeight: '500px' }}>
                                <model-viewer
                                    key={selectedModel} // Force re-render on change
                                    src={models[selectedModel].src}
                                    ios-src=""
                                    poster="/images/hero-bg.png"
                                    alt={`3D model of ${models[selectedModel].title}`}
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate
                                    ar
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <div slot="progress-bar" style={{
                                        display: 'block',
                                        width: '33%',
                                        height: '10%',
                                        maxHeight: '2%',
                                        position: 'absolute',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate3d(-50%, -50%, 0)',
                                        borderRadius: '25px',
                                        boxShadow: '0px 3px 10px 3px rgba(0, 0, 0, 0.5), 0px 0px 5px 1px rgba(0, 0, 0, 0.6)',
                                        border: '1px solid rgba(255, 255, 255, 0.9)',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    }}>
                                        <div className="update-bar" style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                            width: '0%',
                                            height: '100%',
                                            borderRadius: '25px',
                                            float: 'left',
                                            transition: 'width 0.3s'
                                        }}></div>
                                    </div>
                                    <button slot="ar-button" style={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        borderRadius: '4px',
                                        border: 'none',
                                        position: 'absolute',
                                        top: '16px',
                                        right: '16px',
                                        padding: '8px 16px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        zIndex: 10
                                    }}>
                                        👋 Activate AR
                                    </button>
                                </model-viewer>

                                <div style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    left: '20px',
                                    background: 'rgba(0,0,0,0.6)',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    backdropFilter: 'blur(4px)',
                                    maxWidth: '300px',
                                    pointerEvents: 'none'
                                }}>
                                    <p style={{ fontSize: '0.9rem', color: '#ddd' }}>
                                        {models[selectedModel].desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
