// Attendre que les sections soient chargées
document.addEventListener('sectionsLoaded', () => {
    // Données des projets
    const projectData = {
        4: {
            title: "Jeu 3D - Angry bird inversé, les cochons contre attaquent",
            description: `Revisite du jeu Angry Bird dans lequel ce sont les cochons qui attaquent les oiseaux. Ce dernier a la particularité d'être réalisé en 3 dimensions. Caractéristiques principales :
            
            • Projet universitaire en autonomie - 2025 (110 heures)
            • Travail dans une équipe de 4 personnes`,
            image: "https://via.placeholder.com/800x400",
            tags: ["Three.JS", "Javascript", "HTML", "CSS"],
            link: "#"
        },
        3: {
            title: "Applications web et mobile de lutte contre la désinformation",
            description: `Une plateforme de commerce électronique complète offrant une expérience d'achat fluide et sécurisée. Caractéristiques principales :
            
            • Projet universitaire en autonomie - 2024 (200 heures)
            • Travail dans une équipe de 5 personnes`,
            image: "https://via.placeholder.com/800x400",
            tags: ["PHP", "Java", "Kotlin", "SQL", "Docker", "HTML", "CSS"],
            link: "#"
        },
        2: {
            title: "Jeu de dominos (fractions) éducative",
            description: `Jeu de domino dans lequel les chiffres sont remplacés par des fractions. Fonctionnalités :
            
            • Projet universitaire en autonomie - 2023 (170 heures)`,
            image: "https://via.placeholder.com/800x400",
            tags: ["Javascript", "NodeJs", "socket.io", "HTML", "CSS"],
            link: "#"
        },
        1: {
            title: "pplication d'organisation pour les étudiants",
            description: `Application web permettant de s'organiser au mieux dans notre quotidien. Caractéristiques :
            
            • Projet universitaire en autonomie - 2022 (180 heures)`,
            image: "https://via.placeholder.com/800x400",
            tags: ["NodeJs", "TypeScript", "HTML", "CSS"],
            link: "#"
        }
    };

    // Données des expériences
    const experienceData = {
        3: {
            date: "2024 - Présent",
            title: "Alternant développeur web",
            company: "Coqpit, Clermont-Ferrand",
            description: `<p>J'ai créé des sites webs en autonomie, en gérant le développement ainsi que le suivi du projet avec les clients.</p>
            <p>Caractéristiques principales :</p>
            <ul>
                <li>Alternance de 1120 heures</li>
                <li>Suivi du projet directement avec les clients</li>
                <li>Compréhension de leurs demandes</li>
                <li>Vulgarisation technique</li>
                <li>Formation des clients sur l’utilisation de Wordpress</li>
                <li>Création de sites webs avec Wordpress (ACF pro), HTML, SCSS, JS, PHP)</li>
                <li>Participation au BNI (Business Network International) jaude business</li>
            </ul>`,
            skills: ["Wordpress", "ACF Pro", "HTML", "SCSS", "JS", "PHP"],
        },
        2: {
            date: "2024 (10 semaines)",
            title: "Stage en développement web (full stack) en entreprise",
            company: "Open Studio, Clermont-Ferrand",
            description: `<p>J'ai développé un module du CMS open source Thelia et automatisé la génération de la documentation du CMS</p>
            <p>Caractéristiques principales :</p>
            <ul>
                <li>Développement du module CustomFrontMenu qui permet à un client de gérer ses menus en autonomie</li>
                <li>Prise d'initiative de développer des scripts pour automatiser la création de la documentation du CMS</li>
                <li>Choix de ne pas utiliser de librairies afin de limiter le nombre de dépendances du produit final chez le client</li>
                <li>Mise en production</li>
                <li>J'ai mené l'équipe de 3 personnes avec laquelle j'ai travaillé</li>
            </ul>`,
            skills: ["Javascript", "PHP 8.3", "Symfony 6", "Propel", "Smarty", "Python"],
        },
        1: {
            date: "2023 (10 semaines)",
            title: "Stage en dévelopment web (full stack) en entreprise",
            company: "Code Rhapsody, Lyon",
            description: `<p>J'ai participé au développement d'une application interne de gestion des temps et de facturation automatisée</p>
            <p>Caractéristiques principales :</p>
            <ul>
                <li>Développement d'une application interne de gestion des temps et de facturation automatisée</li>
                <li>Compréhension des deux applications existantes à remplacer</li>
                <li>Propositions d'automatisations</li>
                <li>Mise en production</li>
                <li>Choix précis des librairies et retrait de certaines d'entre elles afin de garantir les performances et la sécurité de l'application</li>
            </ul>`,
            skills: ["Javascript", "PHP 8.2", "Symfony 6", "Doctrine", "Twig"],
        }
    };

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

    // Modal expérience
    const experienceModal = document.getElementById('experienceModal');
    if (experienceModal) {
        const modalDate = experienceModal.querySelector('.modal-date');
        const modalTitle = experienceModal.querySelector('.modal-title');
        const modalCompany = experienceModal.querySelector('.modal-company');
        const modalDescription = experienceModal.querySelector('.modal-description');
        const modalSkills = experienceModal.querySelector('.modal-skills');
        const modalAchievements = experienceModal.querySelector('.modal-achievements');
        const modalClose = experienceModal.querySelector('.modal-close');

        // Ouvrir la modal
        document.querySelectorAll('.experience-card').forEach(card => {
            card.addEventListener('click', () => {
                const experienceId = card.dataset.experience;
                const experience = experienceData[experienceId];

                modalDate.textContent = experience.date;
                modalTitle.textContent = experience.title;
                modalCompany.textContent = experience.company;
                modalDescription.innerHTML = experience.description;
                modalSkills.innerHTML = experience.skills
                    .map(skill => `<span>${skill}</span>`)
                    .join('');
                modalAchievements.innerHTML = experience.achievements;

                experienceModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        // Fermer la modal
        modalClose.addEventListener('click', () => {
            experienceModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === experienceModal) {
                experienceModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Modal projet
    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
        const modalImage = projectModal.querySelector('.modal-image');
        const modalTitle = projectModal.querySelector('.modal-title');
        const modalDescription = projectModal.querySelector('.modal-description');
        const modalTags = projectModal.querySelector('.modal-tags');
        const modalLink = projectModal.querySelector('.modal-link');
        const modalClose = projectModal.querySelector('.modal-close');

        // Ouvrir la modal
        document.querySelectorAll('.project-card .btn-primary').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const card = button.closest('.project-card');
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

                projectModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        // Fermer la modal
        modalClose.addEventListener('click', () => {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                projectModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Testimonials Slider
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

    // Event listeners pour les contrôles des témoignages
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

    if (dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentTestimonial = index;
                showTestimonial(currentTestimonial);
                stopAutoSlide();
                startAutoSlide();
            });
        });

        // Démarrer le défilement automatique
        startAutoSlide();

        // Pause du défilement automatique au survol
        const testimonialSlider = document.querySelector('.testimonials-slider');
        if (testimonialSlider) {
            testimonialSlider.addEventListener('mouseenter', stopAutoSlide);
            testimonialSlider.addEventListener('mouseleave', startAutoSlide);
        }
    }
});