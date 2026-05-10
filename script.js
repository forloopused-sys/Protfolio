// ==== Dynamic Year in Footer ====
document.getElementById('year').textContent = new Date().getFullYear();

// ==== Mobile Navigation Toggle ====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // Animate hamburger icon
    hamburger.classList.toggle('active');
});

// ==== Scroll-triggered Animations ====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with the .fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    fadeInObserver.observe(el);
});

// ==== Smooth Scrolling for Anchor Links (fallback for older browsers) ====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetID = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetID);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu after click
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                hamburger.classList.remove('active');
            }
        }
    });
});

// ==== Hamburger Icon Animation ====
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
});

/* Optional: Add CSS for animated hamburger (you can add this to style.css) */
/*
#hamburger.active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
#hamburger.active span:nth-child(2) { opacity: 0; }
#hamburger.active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
*/
