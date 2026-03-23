document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       SECTION : THEME (Day/Night Mode)
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const htmlElement = document.documentElement;

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            if(themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
            if(themeToggleDarkIcon) themeToggleDarkIcon.classList.add('hidden');
        } else {
            htmlElement.classList.remove('dark');
            if(themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
            if(themeToggleLightIcon) themeToggleLightIcon.classList.add('hidden');
        }
    };

    // On page load, check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply the initial theme
    applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

    // Event listener for the toggle button
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = htmlElement.classList.contains('dark');
            const newTheme = isDark ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    /* ==========================================================================
       SECTION : GLOBALE (S'applique à toutes les pages)
       ========================================================================== */

    /**
     * GESTION DU SCROLL & ANIMATIONS D'APPARITION (REVEAL)
     * Fait apparaître les éléments avec la classe .reveal au défilement.
     * Gère aussi l'animation en cascade pour la section compétences sur l'accueil.
     */
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');

                // Spécifique Accueil : Animation en cascade pour les panneaux de compétences
                if (reveal.closest('#skills') && reveal.dataset.animated === 'false') {
                    const cells = reveal.querySelectorAll('.skill-panel');
                    cells.forEach((cell, index) => {
                        cell.style.transitionDelay = `${index * 50}ms`;
                    });
                    reveal.dataset.animated = 'true';
                }
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Déclenchement initial au chargement

    /**
     * BARRE DE NAVIGATION (NAVBAR)
     * Masque la navbar quand on descend, l'affiche quand on remonte.
     */
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    if (navbar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 50) {
                navbar.style.transform = 'translateY(-200%)'; // Masquer
            } else {
                navbar.style.transform = 'translateY(0)'; // Afficher
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }

    /**
     * EFFET SPOTLIGHT GLOBAL
     * Une lueur qui suit la souris en arrière-plan sur toutes les pages.
     */
    const spotlight = document.getElementById('global-spotlight');

    if (spotlight) {
        window.addEventListener('mousemove', (e) => {
            spotlight.style.opacity = '1';
            const x = e.clientX;
            const y = e.clientY;

            spotlight.style.left = `${x}px`;
            spotlight.style.top = `${y}px`;
        });
    }

    /**
     * TERMINAL FOOTER
     * Animation de type "ligne de commande" dans le pied de page.
     * Affiche des citations de développeurs.
     */
    const footerTypewriter = document.getElementById('footer-typewriter');
    if (footerTypewriter) {
        const footerPhrases = [
            'Talk is cheap. Show me the code.',
            'First, solve the problem. Then, write the code.',
            'Code is read more than it is written.'
        ];
        let footerPhraseIndex = 0;
        let footerCharIndex = 0;
        let footerIsDeleting = false;

        const footerTypeEffect = () => {
            const currentPhrase = footerPhrases[footerPhraseIndex];

            if (footerIsDeleting) {
                footerTypewriter.textContent = currentPhrase.substring(0, footerCharIndex - 1);
                footerCharIndex--;
            } else {
                footerTypewriter.textContent = currentPhrase.substring(0, footerCharIndex + 1);
                footerCharIndex++;
            }

            let typeSpeed = footerIsDeleting ? 30 : 80;

            if (!footerIsDeleting && footerCharIndex === currentPhrase.length) {
                footerIsDeleting = true;
                typeSpeed = 2500;
            } else if (footerIsDeleting && footerCharIndex === 0) {
                footerIsDeleting = false;
                footerPhraseIndex = (footerPhraseIndex + 1) % footerPhrases.length;
                typeSpeed = 500;
            }

            setTimeout(footerTypeEffect, typeSpeed);
        };

        footerTypeEffect();
    }

    /* ==========================================================================
       SECTION : PAGE ACCUEIL (index.html)
       ========================================================================== */

    /**
     * MACHINE À ÉCRIRE (HERO SECTION)
     * Animation du texte principal "Je suis..."
     */
    const typeWriterElement = document.getElementById('typewriter');
    if (typeWriterElement) {
        const phrases = ['Développeur Web', 'Étudiant BTS SIO', 'Passionné de Code'];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeEffect = () => {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                typeWriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typeWriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typeSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500;
            }

            setTimeout(typeEffect, typeSpeed);
        };

        typeEffect();
    }

    /* ==========================================================================
       SECTION : PAGE PROJETS (projets.html)
       ========================================================================== */

    /**
     * ANIMATION D'ENTRÉE DES PROJETS
     * Anime l'apparition des cartes une par une au chargement.
     */
    const projectsContainer = document.getElementById('projects-grid');
    if (projectsContainer) {
        const cards = [...projectsContainer.querySelectorAll('.project-card')];

        // 1. État initial masqué (légèrement décalé, rétréci, flou)
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(55px) scale(0.93)';
            card.style.filter = 'blur(6px)';
        });

        // 2. Apparition en cascade
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
                card.style.filter = 'blur(0px)';
            }, 180 + index * 160);
        });
    }

    /* ==========================================================================
       SECTION : EFFETS VISUELS (Toutes pages)
       ========================================================================== */

    /**
     * EFFET AURORA
     * Crée une lueur qui suit la souris au survol des cartes (Projets, Objectifs, Contact).
     */
    const auroraCards = document.querySelectorAll('.objective-card, .project-card, .contact-card');
    auroraCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

});