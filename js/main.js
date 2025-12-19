// Attendre que les sections soient chargées
document.addEventListener('sectionsLoaded', () => {
    // Données des projets
    const projectData = {
        6: {
            title: "Transformation de photos en style 'Comics'",
            description: `Ce projet a pour but de transformer une photo classique en un effet "Comics". Grâce à une série de traitements d'image, nous appliquons des 
            techniques de détection de contours, de réduction de couleurs et d'effets visuels pour obtenir une image stylisée qui imite l'apparence des dessins animés ou des bandes dessinées.
            
            • Fonctionnalités principales :
            • Transformation en niveaux de gris :
            La conversion de l'image en noir et blanc permet de simplifier la détection des contours et d'éliminer les couleurs inutiles.
            • Détection des contours : Utilisation du filtre de Sobel pour détecter les bords et renforcer le contraste entre les éléments importants de l'image.
            • Réduction des couleurs : Utilisation du K-means pour réduire le nombre de couleurs de l'image, afin de créer un effet visuel "plat" et simplifié comme dans une BD.
            • Fusion des contours et des couleurs réduites : Les contours noirs sont superposés à l'image réduite en couleurs pour obtenir l'effet final.
`,
            image: "https://via.placeholder.com/800x400",
            tags: ["Python", "Numpy", "Scipy","Sklearn","Matplotlib"],
            link: "#"
        },
        5: {
            title: "IA supervisée - Prédiction du prix de l'immobilier",
            description: `Projet visant à comparer plusieurs modèles sur la prédiction des prix de l'immobilier et fonction d'une surface et d'un lieu
            
            • Projet universitaire réalisé seul  - 2025 (7 jours)
            • L'application permet d'entraîner ces modèles sur l'historiques des transactions immobilière en France et d'estimer la valeur foncière d'un bien en fonction de sa localisation et de sa surface.
            • Le programme: 
            • Charge et prépare les données.
            • Entraîne les modèles de régression.
            • Demande à l'utilisateur des informations sur le bien immobilier.
            • Prédit le prix du bien à l'aide des modèles entraînés.
            • Modèles Implémentés:
            • Régression Linéaire
            • Random Forest
            • LightGBM`,
            image: "https://via.placeholder.com/800x400",
            tags: ["Python", "Numpy", "Matplotlib", "Scikit-learn","Pandas","Lightgbm"],
            link: "#"
        },
        4: {
            title: "Jeu 3D - Angry bird inversé, les cochons contre attaquent",
            description: `Revisite du jeu Angry Bird dans lequel ce sont les cochons qui attaquent les oiseaux. Ce dernier a la particularité d'être réalisé en 3 dimensions. Caractéristiques principales :
            
            • Travail dans une équipe de 4 personnes
            • La gestion des données se fait via une API fait en Symfony et une base de données MySQL
            • Il est possible de créer et modifier des map grâce à l'éditeur de jeu créé pour l'occasion`,
            image: "https://via.placeholder.com/800x400",
            tags: ["Three.JS", "Javascript", "Symfony", "HTML", "CSS"],
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
            title: "Application d'organisation pour les étudiants",
            description: `Application web permettant de s'organiser au mieux dans notre quotidien. Caractéristiques :
            
            • Projet universitaire en autonomie - 2022 (180 heures)`,
            image: "https://via.placeholder.com/800x400",
            tags: ["NodeJs", "TypeScript", "HTML", "CSS"],
            link: "#"
        }
    };




    // Données des expériences
    const experienceData = {
        4: {
            date: "09/2025 - actuellement",
            title: "Alternant chef de projet / développeur web",
            company: "Coqpit, Clermont-Ferrand",
            description: `<p></p>
            <ul>
                <li>Pilotage complet des projets web en autonomie : priorisation des tâches, coordination des parties prenantes et suivi de l’avancement via Trello.</li>
                <li>Mise en place et standardisation de process internes afin d’optimiser la gestion de projet et la relation client (templates de cahier des charges, questionnaires de satisfaction, livret d'accompagnement client).</li>
                <li>Conception et développement de sites web sur mesure utilisant WordPress (PHP, JavaScript, HTML, SCSS, ACF Pro).</li>
                <li>Livraison, accompagnement et formation client : présentation des livrables, traitement des retours, formation du client à l'utilisation de son site, maintenance évolutive.</li>
            </ul>`,
            skills: ["JS", "PHP", "HTML", "SCSS", "Wordpress", "ACF Pro"],
        },
        3: {
            date: "09/2024 - 09/2025 (1 an)",
            title: "Alternant développeur web",
            company: "Coqpit, Clermont-Ferrand",
            description: `<p>Je créais des sites webs sur mesure en autonomie, en assurant à la fois le développement ainsi que le suivi du projet avec les clients.</p>
            <p>Caractéristiques générales :</p>
            <ul>
                <li>Suivi du projet directement avec les clients</li>
                <li>Compréhension de leurs besoins</li>
                <li>Vulgarisation technique</li>
                <li>Formation des clients sur l’utilisation de Wordpress</li>
                <li>Création de plugin pour Wordpress via une API et développement de sites web avec WordPress (ACF pro), HTML, SCSS, JS, PHP</li>
                <li>Participation au BNI (Business Network International) jaude business</li>
                <li>Formation des clients à l’utilisation de leur site</li>
                <li>Création de sites web avec WordPress (ACF pro), HTML, SCSS, JS, PHP</li>
                <li>Participation au BNI (Business Network International) Jaude Business</li>
            </ul>
            <p>Exemple de projet :</p>
            <ul>
                <li>Développement d'un calendrier de réservation d'un site touristique via une API</li>
                <li>Rendez-vous avec l'entreprise canadienne en charge de l'API afin de comprendre son fonctionnement.
                Le rendez-vous s'est déroulé en anglais avec 5 personnes.</li>
                <li>Consommation optimisée de l'API </li>
                <li>Restructuration des données dans des fichiers .json pour optimiser les performances lors de l'affichage par les clients</li>
                <li>Chargement des données chaque nuit via des CRON </li>
                <li>Développement du front-end </li>
                <li>Réunion de nouveau en anglais avec les ingénieurs canadiens pour vérifier la qualité de mon code et l'optimisation des appels API</li>
                <li>Mise en production de mon code</li>
            </ul>`,
            skills: ["JS", "PHP", "HTML", "SCSS", "Wordpress", "ACF Pro"],
        },
        2: {
            date: "2024 (10 semaines)",
            title: "Stage en développement web (full stack) en entreprise",
            company: "Open Studio, Clermont-Ferrand",
            description: `<p>J'ai développé un module du CMS open source Thelia et automatisé la génération de la documentation du CMS</p>
            <p>Caractéristiques principales :</p>
            <ul>
                <li>Développement du module CustomFrontMenu qui permet à un client de monitorer les menus de son site fait avec Thelia en autonomie</li>
                <li>J'ai pris l'initiative de développer des scripts pour automatiser la création de la documentation du CMS</li>
                <li>J'ai choisi de ne pas utiliser de librairies afin de limiter le nombre de dépendances du produit final chez le client</li>
                <li>Mise en production</li>
                <li>J'ai mené l'équipe de 3 personnes dans laquelle j'ai travaillé</li>
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
                <li>Développement d'une application interne de gestion des temps et de facturation automatisée. 
                Elle contient un calendirer avec des filtres par équipe, projets etc. Les heures réalisées sont 
                pré-remplies dans les fiches de saisie des heures travaillées. En fonction du nombre d'heures rélaisées sur chaque projet,
                les indicateurs sur les couts du projet se mettent automatiquement à jour.</li>
                <li>Compréhension des deux applications existantes à remplacer</li>
                <li>J'ai proposé d'automatiser certaines fonctionnalités</li> 
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