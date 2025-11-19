import Script from 'next/script';
import Link from 'next/link';

export default function VirtualTour() {
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
                padding: '2rem'
            }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>3D Virtual Tour</h1>
                            <p style={{ color: '#ccc' }}>Explore our Petrol Pump Canopy in immersive 3D.</p>
                        </div>
                        <Link href="/" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
                            ← Back to Home
                        </Link>
                    </div>

                    <div style={{
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '24px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        height: '70vh',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* 
              Note: This uses a sample model. 
              Replace 'src' with your own .glb/.gltf file URL (e.g., /models/canopy.glb) 
            */}
                        <model-viewer
                            src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                            ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
                            poster="/images/hero-bg.png"
                            alt="A 3D model of a petrol pump canopy"
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
                                borderRadius: '4px',
                                border: 'none',
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                padding: '8px 16px',
                                fontWeight: 'bold',
                                cursor: 'pointer'
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
                            maxWidth: '300px'
                        }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Interactive Control</h3>
                            <p style={{ fontSize: '0.9rem', color: '#ddd' }}>
                                Drag to rotate, scroll to zoom. On mobile, tap the AR button to view in your space.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
