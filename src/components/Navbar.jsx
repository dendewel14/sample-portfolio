import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar" style={{ position: 'fixed', top: 0, width: '100%', padding: '1.5rem 0', background: 'rgba(5, 5, 5, 0.8)', backdropFilter: 'blur(10px)', zIndex: 1000 }}>
            <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" className="logo" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', textDecoration: 'none' }}>
                    Solutions<span className="highlight" style={{ color: 'var(--accent-primary)' }}>Soft</span>
                </a>

                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle navigation" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <ul className="nav-links" style={{ display: 'flex', listStyle: 'none', gap: '2rem', alignItems: 'center' }}>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact" className="btn-primary">Contact Us</a></li>
                </ul>
            </div>

            {/* Mobile Menu Logic would go here, simplified for now */}
        </nav>
    );
};

export default Navbar;
