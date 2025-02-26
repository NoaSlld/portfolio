// Attendre que les sections soient chargées
document.addEventListener('sectionsLoaded', () => {
    // Données des projets
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

    // Données des expériences
    const experienceData = {
        1: {
            date: "2023 - Présent",
            title: "Développeur Full Stack Senior",
            company: "TechCorp Solutions, Paris",
            description: `<p>En tant que développeur senior, j'ai dirigé une équipe de 5 développeurs dans la conception et la mise en œuvre d'une architecture microservices pour une application d'entreprise à grande échelle.</p>
            <p>Responsabilités principales :</p>
            <ul>
                <li>Conception et implémentation d'une architecture microservices</li>
                <li>Management d'une équipe de 5 développeurs</li>
                <li>Optimisation des performances (amélioration de 40%)</li>
                <li>Mise en place de CI/CD avec GitHub Actions</li>
                <li>Refactorisation du code legacy</li>
            </ul>`,
            skills: ["React", "Node.js", "Docker", "Kubernetes", "AWS", "MongoDB"],
            achievements: `<h4>Réalisations clés</h4>
            <ul>
                <li>Réduction du temps de déploiement de 45 minutes à 10 minutes</li>
                <li>Amélioration des performances de l'application de 40%</li>
                <li>Mise en place d'une suite de tests automatisés avec une couverture de 85%</li>
            </ul>`
        },
        2: {
            date: "2022 - 2023",
            title: "Lead Developer Frontend",
            company: "StartupInno, Paris",
            description: `<p>J'ai dirigé la refonte complète de l'interface utilisateur d'une application SaaS en croissance rapide, en mettant l'accent sur l'expérience utilisateur et les performances.</p>
            <p>Responsabilités principales :</p>
            <ul>
                <li>Architecture frontend avec React et TypeScript</li>
                <li>Mise en place d'une bibliothèque de composants réutilisables</li>
                <li>Optimisation des performances frontend</li>
                <li>Collaboration avec l'équipe UX/UI</li>
                <li>Mentorat des développeurs juniors</li>
            </ul>`,
            skills: ["React", "TypeScript", "Redux", "Styled Components", "Jest", "Webpack"],
            achievements: `<h4>Réalisations clés</h4>
            <ul>
                <li>Réduction du temps de chargement initial de 60%</li>
                <li>Mise en place d'une architecture frontend modulaire et maintenable</li>
                <li>Augmentation de la satisfaction utilisateur de 35%</li>
            </ul>`
        },
        3: {
            date: "2021 - 2022",
            title: "Développeur Backend",
            company: "DigitalSolutions, Lyon",
            description: `<p>J'ai développé et optimisé des APIs RESTful pour une plateforme de gestion de contenu utilisée par plus de 500 000 utilisateurs.</p>
            <p>Responsabilités principales :</p>
            <ul>
                <li>Conception et développement d'APIs RESTful</li>
                <li>Optimisation des requêtes de base de données</li>
                <li>Mise en place de tests automatisés</li>
                <li>Documentation des APIs avec Swagger</li>
                <li>Monitoring et logging</li>
            </ul>`,
            skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Jest"],
            achievements: `<h4>Réalisations clés</h4>
            <ul>
                <li>Réduction du temps de réponse des APIs de 70%</li>
                <li>Mise en place d'un système de cache qui a réduit la charge du serveur de 40%</li>
                <li>Couverture de tests de 90% pour le code backend</li>
            </ul>`
        },
        4: {
            date: "2020 - 2021",
            title: "Développeur Web Full Stack",
            company: "WebAgency, Paris",
            description: `<p>J'ai participé au développement de sites e-commerce pour des clients de différents secteurs, en me concentrant sur l'intégration de systèmes de paiement et l'optimisation des performances.</p>
            <p>Responsabilités principales :</p>
            <ul>
                <li>Développement frontend avec React</li>
                <li>Développement backend avec Node.js</li>
                <li>Intégration de passerelles de paiement (Stripe, PayPal)</li>
                <li>Optimisation SEO</li>
                <li>Déploiement et maintenance</li>
            </ul>`,
            skills: ["React", "Node.js", "MongoDB", "Stripe API", "SEO", "AWS"],
            achievements: `<h4>Réalisations clés</h4>
            <ul>
                <li>Augmentation des conversions de 25% grâce à l'optimisation du tunnel d'achat</li>
                <li>Amélioration du classement SEO pour des mots-clés compétitifs</li>
                <li>Réduction du taux de rebond de 30%</li>
            </ul>`
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