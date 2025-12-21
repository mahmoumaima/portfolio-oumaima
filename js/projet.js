/**
 * Portfolio Oumaima Mahmoudi
 * Pages Projet - Interactions et animations
 * Design innovant 2025
 */

document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // NAVIGATION - SCROLL & DOTS
  // =============================================

  const navbar = document.querySelector('.navbar-projet');
  const navDots = document.querySelectorAll('.nav-dot');
  const sections = document.querySelectorAll('section[id]');

  // Navbar scroll effect
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Navigation dots - highlight active section
  const observerOptions = {
    root: null,
    rootMargin: '-40% 0px -40% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        navDots.forEach((dot) => {
          dot.classList.remove('active');
          if (dot.getAttribute('data-section') === sectionId) {
            dot.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => sectionObserver.observe(section));

  // Smooth scroll pour les nav dots
  navDots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = dot.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  // =============================================
  // GALERIE - CHANGEMENT D'IMAGE
  // =============================================

  const thumbnails = document.querySelectorAll('.thumbnail');
  const imagePrincipale = document.querySelector('.navigateur-ecran img');

  if (thumbnails.length && imagePrincipale) {
    thumbnails.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        // Retirer active de tous
        thumbnails.forEach((t) => t.classList.remove('active'));
        // Ajouter active au cliqué
        thumb.classList.add('active');

        // Changer l'image principale avec animation
        const nouvelleImage = thumb.getAttribute('data-img');
        imagePrincipale.style.opacity = '0';
        imagePrincipale.style.transform = 'scale(1.05)';

        setTimeout(() => {
          imagePrincipale.src = nouvelleImage;
          imagePrincipale.style.opacity = '1';
          imagePrincipale.style.transform = 'scale(1)';
        }, 300);
      });
    });
  }


  // =============================================
  // ANIMATIONS AU SCROLL
  // =============================================

  const elementsAnimes = document.querySelectorAll(
    '.carte-contexte, .timeline-item, .stat-card, .apprentissage-item'
  );

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        animationObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elementsAnimes.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    animationObserver.observe(el);
  });

  // Ajouter les styles pour l'animation
  const styleAnimation = document.createElement('style');
  styleAnimation.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(styleAnimation);


  // =============================================
  // TIMELINE - ANIMATION DES POINTS
  // =============================================

  const timelinePoints = document.querySelectorAll('.timeline-point');

  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('pulse');
      }
    });
  }, { threshold: 0.5 });

  timelinePoints.forEach((point) => {
    timelineObserver.observe(point);
  });

  // Style pour l'animation pulse
  const stylePulse = document.createElement('style');
  stylePulse.textContent = `
    .timeline-point.pulse {
      animation: timeline-pulse 2s ease-in-out infinite;
    }
    @keyframes timeline-pulse {
      0%, 100% {
        box-shadow: 0 0 30px rgba(220, 20, 60, 0.4);
      }
      50% {
        box-shadow: 0 0 50px rgba(220, 20, 60, 0.7), 0 0 80px rgba(118, 75, 162, 0.4);
      }
    }
  `;
  document.head.appendChild(stylePulse);


  // =============================================
  // BOUTON RETOUR EN HAUT
  // =============================================

  const btnTop = document.querySelector('.btn-top');

  if (btnTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        btnTop.classList.add('visible');
      } else {
        btnTop.classList.remove('visible');
      }
    });

    btnTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // =============================================
  // COMPTEURS ANIMÉS (Stats)
  // =============================================

  const statsNombres = document.querySelectorAll('.stat-nombre');

  const animerCompteur = (element) => {
    const texte = element.textContent;
    const nombre = parseInt(texte, 10);

    // Si c'est un nombre, animer
    if (!isNaN(nombre)) {
      let compteur = 0;
      const duree = 2000;
      const increment = nombre / (duree / 16);

      const animer = () => {
        compteur += increment;
        if (compteur < nombre) {
          element.textContent = Math.floor(compteur);
          requestAnimationFrame(animer);
        } else {
          element.textContent = texte; // Remettre le texte original (avec % ou +)
        }
      };

      element.textContent = '0';
      animer();
    }
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animerCompteur(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statsNombres.forEach((stat) => statsObserver.observe(stat));


  // =============================================
  // PARALLAXE LÉGER SUR LE HERO
  // =============================================

  const heroImage = document.querySelector('.hero-image');

  if (heroImage && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroHeight = document.querySelector('.hero-immersif')?.offsetHeight || 0;

      if (scrollY < heroHeight) {
        const translateY = scrollY * 0.3;
        heroImage.style.transform = `scale(1.1) translateY(${translateY}px)`;
      }
    });
  }


  // =============================================
  // EFFET TILT SUR LES CARTES (Desktop)
  // =============================================

  if (window.innerWidth > 1024) {
    const cartesContexte = document.querySelectorAll('.carte-contexte');

    cartesContexte.forEach((carte) => {
      carte.addEventListener('mousemove', (e) => {
        const rect = carte.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        carte.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
      });

      carte.addEventListener('mouseleave', () => {
        carte.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      });
    });
  }

});
