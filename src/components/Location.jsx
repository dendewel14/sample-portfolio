import React from 'react';
import { motion } from 'framer-motion';

const Location = () => {
    return (
        <section id="location" className="location" style={{ padding: '8rem 0' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    Our Location
                </motion.h2>
                <div className="location-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        className="location-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Headquarters</h3>
                        <p style={{ marginTop: '1rem' }}>
                            Old Trafford,<br />
                            Sir Matt Busby Way, Stretford,<br />
                            Manchester M16 0RA, UK
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                            <strong>Email:</strong> hello@solutionssoft.com<br />
                            <strong>Phone:</strong> +1 (555) 123-4567
                        </p>
                    </motion.div>
                    <motion.div
                        className="map-placeholder"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                        <img src="/assets/map_pin_location.png" alt="Map Location" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;
