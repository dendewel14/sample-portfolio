import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useIsMobile from '../hooks/useIsMobile';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useIsMobile();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar" style={{ position: 'fixed', top: 0, width: '100%', padding: '1.5rem 0', background: 'rgba(5, 5, 5, 0.8)', backdropFilter: 'blur(10px)', zIndex: 1000 }}>
            <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1001 }}>
                <a href="#" className="logo" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', textDecoration: 'none' }}>
                    Solutions<span className="highlight" style={{ color: 'var(--accent-primary)' }}>Soft</span>
                </a>

                {/* Desktop Nav */}
                {!isMobile && (
                    <ul className="nav-links desktop-nav" style={{ display: 'flex', listStyle: 'none', gap: '2rem', alignItems: 'center' }}>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact" className="btn-primary">Contact Us</a></li>
                    </ul>
                )}

                {/* Mobile Toggle */}
                {isMobile && (
                    <button
                        className="mobile-toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            zIndex: 1002,
                            position: 'relative',
                            width: '30px',
                            height: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            style={{ display: 'block', width: '100%', height: '2px', background: 'white', transformOrigin: 'center' }}
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            style={{ display: 'block', width: '100%', height: '2px', background: 'white' }}
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            style={{ display: 'block', width: '100%', height: '2px', background: 'white', transformOrigin: 'center' }}
                        />
                    </button>
                )}
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && isMobile && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'rgba(10, 10, 10, 0.95)',
                            backdropFilter: 'blur(20px)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 1000,
                            padding: '2rem'
                        }}
                    >
                        <ul style={{ listStyle: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {['Services', 'About', 'Contact'].map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={toggleMenu}
                                        style={{
                                            fontSize: '2rem',
                                            fontWeight: 600,
                                            color: 'white',
                                            textDecoration: 'none',
                                            position: 'relative'
                                        }}
                                    >
                                        {item}
                                        {item === 'Contact' && <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-primary)', marginTop: '0.5rem', fontWeight: 400 }}>Let's Talk</span>}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
