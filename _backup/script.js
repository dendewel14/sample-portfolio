document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animate hamburger
        const bars = mobileToggle.querySelectorAll('.bar');
        if (navLinks.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            body.style.overflow = 'hidden';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
            body.style.overflow = 'auto';
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const bars = mobileToggle.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
            body.style.overflow = 'auto';
        });
    });

    // Scroll Animations using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-up, .fade-in');
    animatedElements.forEach(el => observer.observe(el));

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        } else {
            navbar.style.padding = '1.5rem 0';
            navbar.style.background = 'rgba(5, 5, 5, 0.8)';
        }
    });
});
