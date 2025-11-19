import React from 'react';
import Navbar from './components/Navbar';
import RobotHero from './components/RobotHero';
import Services from './components/Services';
import Team from './components/Team';
import Location from './components/Location';
import MouseBackground from './components/MouseBackground';
import './index.css';

function App() {
    return (
        <div className="app-container">
            <MouseBackground />
            <Navbar />
            <RobotHero />
            <Services />
            <Team />
            <Location />

            <section id="about" className="about">
                <div className="container about-content">
                    <div className="about-text">
                        <h2 className="section-title">Why Choose Solutions Soft?</h2>
                        <p>We bridge the gap between complex technology and business value. Our team of experts leverages the latest advancements in AI and automation to deliver scalable, robust, and modern solutions.</p>
                        <ul className="feature-list">
                            <li>Cutting-edge Tech Stack</li>
                            <li>Rapid Delivery</li>
                            <li>Scalable Architecture</li>
                        </ul>
                    </div>
                    <div className="about-visual">
                        <div className="visual-card" style={{ backgroundImage: 'url(/assets/about_innovation.png)', backgroundSize: 'cover', border: 'none' }}>
                            <span style={{ background: 'rgba(0,0,0,0.7)', padding: '0.5rem 1rem', borderRadius: '20px' }}>Innovation</span>
                        </div>
                        <div className="visual-card" style={{ backgroundImage: 'url(/assets/about_speed.png)', backgroundSize: 'cover', border: 'none' }}>
                            <span style={{ background: 'rgba(0,0,0,0.7)', padding: '0.5rem 1rem', borderRadius: '20px' }}>Speed</span>
                        </div>
                        <div className="visual-card" style={{ backgroundImage: 'url(/assets/about_quality.png)', backgroundSize: 'cover', border: 'none' }}>
                            <span style={{ background: 'rgba(0,0,0,0.7)', padding: '0.5rem 1rem', borderRadius: '20px' }}>Quality</span>
                        </div>
                        <div className="visual-card" style={{ backgroundImage: 'url(/assets/about_scalability.png)', backgroundSize: 'cover', border: 'none' }}>
                            <span style={{ background: 'rgba(0,0,0,0.7)', padding: '0.5rem 1rem', borderRadius: '20px' }}>Scalability</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact">
                <div className="container">
                    <div className="contact-wrapper">
                        <h2 className="section-title">Ready to Transform?</h2>
                        <p>Let's discuss how we can build your next big idea.</p>
                        <a href="mailto:contact@solutionssoft.com" className="btn-primary large">Start a Project</a>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container footer-content">
                    <p>&copy; 2024 Solutions Soft. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                        <a href="#">GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
