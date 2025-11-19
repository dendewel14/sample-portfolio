import React, { useEffect, useRef } from 'react';

const MouseBackground = () => {
    const bgRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (bgRef.current) {
                const x = e.clientX;
                const y = e.clientY;
                bgRef.current.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(0, 240, 255, 0.15), transparent 80%)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={bgRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                background: 'radial-gradient(600px at 50% 50%, rgba(0, 240, 255, 0.15), transparent 80%)',
                transition: 'background 0.1s ease'
            }}
        />
    );
};

export default MouseBackground;
