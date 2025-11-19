import React, { useRef, Suspense, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import RobotModel from './RobotModel';

const RobotHero = () => {
    const containerRef = useRef(null);
    const [isInteracting, setIsInteracting] = useState(false);

    // Responsive Logic
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Adjust scale and position based on device
    // Desktop: Scale 3.0, Position [0, -0.3, 0] (Raised to show feet)
    // Mobile: Scale 1.8, Position [0, -0.8, 0] (Smaller for narrow screens)
    const modelScale = isMobile ? 1.8 : 3.0;
    const modelPosition = isMobile ? [0, -0.8, 0] : [0, -0.3, 0];

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Rotation: Starts at Math.PI + π/4 (Exactly Back-Facing) and rotates to 2 * Math.PI + π/4 (Front, Anti-Clockwise)
    const rotateY = useTransform(scrollYProgress, [0, 0.5], [Math.PI + Math.PI / 4, Math.PI * 2 + Math.PI / 4]);

    // Opacity for UI elements
    const scrollOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const [uiOpacity, setUiOpacity] = useState(1);

    useEffect(() => {
        const unsubscribe = scrollOpacity.on("change", (v) => {
            if (!isInteracting) setUiOpacity(v);
        });
        return () => unsubscribe();
    }, [scrollOpacity, isInteracting]);

    useEffect(() => {
        if (isInteracting) {
            setUiOpacity(0);
        } else {
            setUiOpacity(scrollOpacity.get());
        }
    }, [isInteracting, scrollOpacity]);


    return (
        <div ref={containerRef} style={{ height: '300vh', position: 'relative' }}>
            <div className="sticky-wrapper" style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                {/* Content Overlay */}
                <motion.div
                    animate={{ opacity: uiOpacity }}
                    transition={{ duration: 0.5 }}
                    style={{ position: 'absolute', zIndex: 10, textAlign: 'center', width: '100%', pointerEvents: 'none', top: '50%', transform: 'translateY(-50%)' }}
                >
                    <h1 style={{ fontSize: isMobile ? '2.5rem' : '4rem', marginBottom: '1rem' }}>
                        Future-Proof Your <span className="gradient-text">Business</span>
                    </h1>
                    <p style={{ fontSize: isMobile ? '1rem' : '1.5rem', color: '#ccc' }}>Scroll to Initialize AI Core</p>
                </motion.div>

                {/* 3D Robot Canvas */}
                <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                        <Suspense fallback={null}>
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <pointLight position={[-10, -10, -10]} />
                            <RobotModel
                                rotationY={rotateY}
                                scale={modelScale}
                                position={modelPosition}
                            />
                            <Environment preset="city" />
                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                                onStart={() => setIsInteracting(true)}
                                onEnd={() => setIsInteracting(false)}
                            />
                        </Suspense>
                    </Canvas>
                </div>

                {/* Interaction Hint */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: uiOpacity, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        bottom: '20%',
                        zIndex: 10,
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        pointerEvents: 'none'
                    }}
                >
                    <span style={{ width: '8px', height: '8px', background: '#00f0ff', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px #00f0ff' }}></span>
                    <span style={{ fontSize: '0.9rem', color: '#a0a0a0', letterSpacing: '1px' }}>INTERACTIVE 3D MODEL • DRAG TO ROTATE</span>
                </motion.div>

                {/* Final Call to Action */}
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: '10%',
                        zIndex: 10,
                        opacity: useTransform(scrollYProgress, [0.4, 0.5], [0, 1])
                    }}
                >
                    <a href="#services" className="btn-primary large">Enter System</a>
                </motion.div>

            </div>
        </div>
    );
};

export default RobotHero;
