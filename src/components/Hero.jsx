import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <header className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: '80px', overflow: 'hidden' }}>
            <div className="container hero-content" style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Future-Proof Your Business with <span className="gradient-text">Intelligent Solutions</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    We build next-gen AI Applications, POCs, and MVPs. Expert automation with No-Code/Low-Code platforms.
                </motion.p>
                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ marginTop: '2rem' }}
                >
                    <a href="#services" className="btn-primary">Explore Services</a>
                    <a href="#contact" className="btn-secondary">Get in Touch</a>
                </motion.div>
            </div>
            <div className="hero-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>
        </header>
    );
};

export default Hero;
