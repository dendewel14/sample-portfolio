import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    { name: "Ahmad Khan", role: "Lead AI Engineer", img: "/assets/team_member_1.png" },
    { name: "Bilal Ahmed", role: "Product Strategist", img: "/assets/team_member_2.png" },
    { name: "Zain Ali", role: "Full Stack Developer", img: "/assets/team_member_3.png" }
];

const Team = () => {
    return (
        <section id="team" className="team" style={{ padding: '8rem 0', background: '#0a0a0a' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    Meet the Team
                </motion.h2>
                <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="team-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{ background: '#111', borderRadius: '15px', overflow: 'hidden', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}
                        >
                            <div style={{ height: '300px', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ marginBottom: '0.5rem' }}>{member.name}</h3>
                                <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
