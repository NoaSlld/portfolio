// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Experience card details toggle
document.querySelectorAll('.show-more').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.experience-card');
        const details = card.querySelector('.experience-details');
        
        if (details) {
            details.classList.toggle('show');
            button.textContent = details.classList.contains('show') ? 'Voir moins' : 'Voir plus';
        }
    });
});

// Testimonials slider
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.control-btn.prev');
const nextBtn = document.querySelector('.control-btn.next');
let currentTestimonial = 0;
let autoSlideInterval;

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonialCards[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextTestimonial, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event listeners for testimonial controls
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        prevTestimonial();
        stopAutoSlide();
        startAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        nextTestimonial();
        stopAutoSlide();
        startAutoSlide();
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
        stopAutoSlide();
        startAutoSlide();
    });
});

// Start auto-sliding
startAutoSlide();

// Pause auto-slide when hovering over testimonials
const testimonialSlider = document.querySelector('.testimonials-slider');
if (testimonialSlider) {
    testimonialSlider.addEventListener('mouseenter', stopAutoSlide);
    testimonialSlider.addEventListener('mouseleave', startAutoSlide);
}

// Project modal
const projectData = {
    1: {
        title: "Application E-commerce",
        description: `Une plateforme de commerce électronique complète offrant une expérience d'achat fluide et sécurisée. Caractéristiques principales :
        
        • Système de panier d'achat dynamique
        • Intégration de paiement sécurisé
        • Gestion des stocks en temps réel
        • Interface administrateur complète
        • Système de notation et avis clients
        • Optimisation SEO avancée`,
        image: "https://via.placeholder.com/800x400",
        tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "AWS"],
        link: "#"
    },
    2: {
        title: "Dashboard Analytics",
        description: `Interface d'administration sophistiquée permettant la visualisation et l'analyse de données en temps réel. Fonctionnalités :
        
        • Graphiques interactifs personnalisables
        • Tableaux de bord en temps réel
        • Export de rapports automatisés
        • Système d'alertes intelligent
        • Analyse prédictive
        • Interface responsive`,
        image: "https://via.placeholder.com/800x400",
        tags: ["Vue.js", "D3.js", "Firebase", "TypeScript", "TailwindCSS"],
        link: "#"
    },
    3: {
        title: "Application Mobile Fitness",
        description: `Application mobile de suivi fitness complète avec synchronisation cloud et analyses détaillées. Caractéristiques :
        
        • Suivi d'activités personnalisé
        • Synchronisation multi-appareils
        • Statistiques détaillées
        • Plans d'entraînement adaptatifs
        • Intégration avec appareils connectés
        • Mode hors ligne`,
        image: "https://via.placeholder.com/800x400",
        tags: ["React Native", "Redux", "AWS", "Node.js", "MongoDB"],
        link: "#"
    }
};

const modal = document.getElementById('projectModal');
const modalImage = modal.querySelector('.modal-image');
const modalTitle = modal.querySelector('.modal-title');
const modalDescription = modal.querySelector('.modal-description');
const modalTags = modal.querySelector('.modal-tags');
const modalLink = modal.querySelector('.modal-link');
const modalClose = modal.querySelector('.modal-close');

// Open modal
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const projectId = card.dataset.project;
        const project = projectData[projectId];

        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalTitle.textContent = project.title;
        modalDescription.innerHTML = project.description;
        modalTags.innerHTML = project.tags
            .map(tag => `<span>${tag}</span>`)
            .join('');
        modalLink.href = project.link;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Header scroll behavior
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 80) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});