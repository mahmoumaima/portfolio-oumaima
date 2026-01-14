/**
 * Portfolio Oumaima Mahmoudi
 * Script principal - Navigation, animations et interactions
 * Développé par Oumaima - 2025
 */

document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // MENU NAVIGATION
  // =============================================

  const boutonMenu = document.querySelector('.hamburger');
  const menuNav = document.querySelector('.nav-menu');
  const liensNav = document.querySelectorAll('.nav-menu a');
  const flecheHaut = document.querySelector('.btn-top');
  const toutesLesSections = document.querySelectorAll('section[id]');

  // Ouvrir/fermer le menu mobile
  if (boutonMenu && menuNav) {
    boutonMenu.addEventListener('click', () => {
      const estOuvert = boutonMenu.getAttribute('aria-expanded') === 'true';
      boutonMenu.setAttribute('aria-expanded', !estOuvert);
      boutonMenu.classList.toggle('active');
      menuNav.classList.toggle('active');
    });
  }

  // Fermer le menu quand on clique sur un lien
  liensNav.forEach((lien) => {
    lien.addEventListener('click', () => {
      boutonMenu?.setAttribute('aria-expanded', 'false');
      boutonMenu?.classList.remove('active');
      menuNav?.classList.remove('active');
    });
  });

  // Défilement fluide vers les ancres
  document.querySelectorAll('a[href^="#"]').forEach((ancre) => {
    ancre.addEventListener('click', (e) => {
      e.preventDefault();
      const cible = document.querySelector(ancre.getAttribute('href'));
      if (cible) {
        const decalage = 80;
        window.scrollTo({
          top: cible.offsetTop - decalage,
          behavior: 'smooth'
        });
      }
    });
  });

  // Surligner le lien actif selon la section visible
  const navbar = document.querySelector('.navbar');
  const sectionProjets = document.getElementById('projects');

  const mettreAJourLienActif = () => {
    const positionScroll = window.pageYOffset;

    toutesLesSections.forEach((section) => {
      const hauteurSection = section.offsetHeight;
      const debutSection = section.offsetTop - 100;
      const idSection = section.getAttribute('id');

      if (positionScroll > debutSection && positionScroll <= debutSection + hauteurSection) {
        liensNav.forEach((lien) => {
          lien.classList.remove('active');
          if (lien.getAttribute('href') === `#${idSection}`) {
            lien.classList.add('active');
          }
        });

        // Gérer la flèche retour en haut
        if (flecheHaut) {
          if (idSection === 'home') {
            flecheHaut.classList.remove('visible');
          } else {
            flecheHaut.classList.add('visible');
          }
        }
      }
    });

    // Gérer le style de la navbar selon la section projets (fond sombre)
    if (navbar && sectionProjets) {
      const rectProjets = sectionProjets.getBoundingClientRect();
      // Navbar sombre quand la section projets est visible en haut de l'écran
      const surSectionSombre = rectProjets.top < 80 && rectProjets.bottom > 80;
      navbar.classList.toggle('nav-sombre', surSectionSombre);
    }
  };

  window.addEventListener('scroll', mettreAJourLienActif);
  mettreAJourLienActif();


  // =============================================
  // EFFET PARALLAXE (Bannière d'accueil)
  // =============================================

  const banniereAccueil = document.querySelector('.parallax');

  if (banniereAccueil) {
    window.addEventListener('scroll', () => {
      const defilement = window.pageYOffset;
      banniereAccueil.style.transform = `translateY(${defilement * 0.5}px)`;
    });
  }


  // =============================================
  // ANIMATIONS AU DÉFILEMENT
  // =============================================

  // WOW.js pour les animations Animate.css
  if (typeof WOW !== 'undefined') {
    new WOW({
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 100,
      mobile: true,
      live: true
    }).init();
  }

  // Animation de révélation personnalisée
  const observateurAnimation = new IntersectionObserver((elements) => {
    elements.forEach((el) => {
      if (el.isIntersecting) {
        el.target.style.opacity = '1';
        el.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  document.querySelectorAll('.animate__animated').forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease-out';
    observateurAnimation.observe(element);
  });


  // =============================================
  // CARTES PROJETS (Élévation au survol)
  // =============================================

  document.querySelectorAll('.carte-projet').forEach((carte) => {
    carte.addEventListener('mouseenter', () => carte.style.zIndex = '10');
    carte.addEventListener('mouseleave', () => carte.style.zIndex = '1');
  });


  // =============================================
  // ÉTIQUETTES COMPÉTENCES (Animation décalée)
  // =============================================

  document.querySelectorAll('.etiquette').forEach((etiquette, index) => {
    etiquette.style.animationDelay = `${index * 0.1}s`;
  });


  // =============================================
  // BARRE DE PROGRESSION (Scroll)
  // =============================================

  const barreScroll = document.createElement('div');
  barreScroll.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    width: 0%;
    background: linear-gradient(90deg, #dc143c 0%, #ff6f61 100%);
    z-index: 9999;
    transition: width 0.2s ease-out;
  `;
  document.body.appendChild(barreScroll);

  window.addEventListener('scroll', () => {
    const hauteurTotale = document.documentElement.scrollHeight - window.innerHeight;
    const pourcentage = (window.scrollY / hauteurTotale) * 100;
    barreScroll.style.width = `${pourcentage}%`;
  });


  // =============================================
  // NAVBAR PAGES PROJET (Mode contraste)
  // =============================================

  const estPageProjet = document.body.classList.contains('page-projet');

  if (estPageProjet) {
    const navbar = document.querySelector('.navbar');
    const banniereProjet = document.querySelector('.banniere-projet');
    const logoCentre = document.querySelector('.logo-centre');

    const gererContrasteNavbar = () => {
      if (!navbar || !banniereProjet) return;

      const seuilBanniere = banniereProjet.offsetHeight - navbar.offsetHeight - 40;

      if (window.scrollY < seuilBanniere) {
        navbar.classList.add('nav-contraste');
        logoCentre?.classList.add('logo-contraste');
      } else {
        navbar.classList.remove('nav-contraste');
        logoCentre?.classList.remove('logo-contraste');
      }
    };

    window.addEventListener('scroll', gererContrasteNavbar);
    window.addEventListener('load', gererContrasteNavbar);
  }


  // =============================================
  // CHARGEMENT DIFFÉRÉ DES IMAGES
  // =============================================

  const imagesDifferees = document.querySelectorAll('img[data-src]');

  if (imagesDifferees.length) {
    const observateurImages = new IntersectionObserver((entrees, obs) => {
      entrees.forEach((entree) => {
        if (entree.isIntersecting) {
          const img = entree.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          obs.unobserve(img);
        }
      });
    });

    imagesDifferees.forEach((img) => observateurImages.observe(img));
  }


  // =============================================
  // COMPTEURS STATISTIQUES (Section À propos)
  // =============================================

  const animerCompteur = (element, valeurFinale) => {
    const duree = 2000;
    const increment = valeurFinale / (duree / 16);
    let valeurActuelle = 0;

    const intervalle = setInterval(() => {
      valeurActuelle += increment;
      if (valeurActuelle >= valeurFinale) {
        element.textContent = `${valeurFinale}+`;
        clearInterval(intervalle);
      } else {
        element.textContent = `${Math.floor(valeurActuelle)}+`;
      }
    }, 16);
  };

  const observateurStats = new IntersectionObserver((entrees, obs) => {
    entrees.forEach((entree) => {
      if (entree.isIntersecting) {
        const chiffre = entree.target.querySelector('h3');
        if (chiffre) {
          const valeur = parseInt(chiffre.textContent, 10);
          animerCompteur(chiffre, valeur);
        }
        obs.unobserve(entree.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-element').forEach((stat) => observateurStats.observe(stat));


  // =============================================
  // ANNÉE DYNAMIQUE (Footer)
  // =============================================

  const elementAnnee = document.getElementById('year');
  if (elementAnnee) {
    elementAnnee.textContent = new Date().getFullYear();
  }


  // =============================================
  // EFFET TYPING (Titre d'accueil)
  // =============================================

  const elementTyping = document.getElementById('typing-name');

  if (elementTyping) {
    const texteAEcrire = 'Oumaima';
    let indexLettre = 0;

    const ecrireLettre = () => {
      if (indexLettre < texteAEcrire.length) {
        elementTyping.textContent += texteAEcrire.charAt(indexLettre);
        indexLettre++;
        setTimeout(ecrireLettre, 120);
      }
    };

    // Démarrer après un court délai
    setTimeout(ecrireLettre, 800);
  }


  // =============================================
  // EFFET BAGUETTE MAGIQUE (Section Home uniquement)
  // =============================================

  const sectionHome = document.getElementById('home');
  const estPageIndex = !document.body.classList.contains('page-projet');

  // Activer seulement sur index.html, section home, et desktop
  if (sectionHome && estPageIndex && !('ontouchstart' in window)) {

    const canvas = document.createElement('canvas');
    canvas.id = 'particules-canvas';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particules = [];
    let dernierX = -100;
    let dernierY = -100;

    // Adapter la taille du canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Classe Particule avec disparition progressive
    class ParticuleMagique {
      constructor(x, y) {
        this.x = x + (Math.random() - 0.5) * 20;
        this.y = y + (Math.random() - 0.5) * 20;
        this.taille = Math.random() * 5 + 3;
        this.couleur = Math.random() > 0.5 ? '#dc143c' : '#ff6f61';
        this.opacite = 1;
        this.vitesseDispari = Math.random() * 0.02 + 0.015;
        this.vitesseX = (Math.random() - 0.5) * 1;
        this.vitesseY = (Math.random() - 0.5) * 1 - 0.5;
      }

      mettreAJour() {
        this.x += this.vitesseX;
        this.y += this.vitesseY;
        this.opacite -= this.vitesseDispari;
        this.taille *= 0.98;
      }

      dessiner() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.taille, 0, Math.PI * 2);
        ctx.fillStyle = this.couleur;
        ctx.globalAlpha = Math.max(0, this.opacite);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      estMorte() {
        return this.opacite <= 0 || this.taille < 0.5;
      }
    }

    // Vérifier si on est sur la section home (visible à au moins 50%)
    const estSurHome = () => {
      const rect = sectionHome.getBoundingClientRect();
      const hauteurVisible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const pourcentVisible = hauteurVisible / rect.height;
      return pourcentVisible > 0.5;
    };

    // Créer des particules au mouvement de la souris
    document.addEventListener('mousemove', (e) => {
      if (!estSurHome()) return;

      const sourisX = e.clientX;
      const sourisY = e.clientY;

      // Calculer la distance depuis le dernier point
      const dx = sourisX - dernierX;
      const dy = sourisY - dernierY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Créer des particules si on a bougé
      if (distance > 3) {
        // Plus on bouge vite, plus on crée de particules
        const nbParticules = Math.min(Math.floor(distance / 5), 5) + 2;
        for (let i = 0; i < nbParticules; i++) {
          particules.push(new ParticuleMagique(sourisX, sourisY));
        }
        dernierX = sourisX;
        dernierY = sourisY;
      }
    });

    // Animation
    const animer = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (estSurHome()) {
        canvas.style.opacity = '1';

        // Mettre à jour et dessiner les particules
        particules.forEach((p) => {
          p.mettreAJour();
          p.dessiner();
        });

        // Supprimer les particules mortes
        particules = particules.filter((p) => !p.estMorte());
      } else {
        canvas.style.opacity = '0';
        // Vider toutes les particules quand on quitte home
        particules = [];
      }

      requestAnimationFrame(animer);
    };

    canvas.style.transition = 'opacity 0.5s ease';
    animer();
  }


  // =============================================
  // WIDGETS HOME (Bureau créatif)
  // =============================================

  // Uniquement sur index.html et desktop
  if (sectionHome && estPageIndex && !('ontouchstart' in window)) {

    // --- BADGE OPEN TO WORK (large, haut droite) ---
    const badgeOpen = document.createElement('div');
    badgeOpen.className = 'widget-badge';
    badgeOpen.innerHTML = `
      <span class="badge-dot"></span>
      <span class="badge-text">Open to work</span>
    `;
    document.body.appendChild(badgeOpen);

    // --- WIDGET LOCATION ARTISTIQUE (bas gauche, vertical) ---
    const widgetLocation = document.createElement('div');
    widgetLocation.className = 'widget-location-art';
    widgetLocation.innerHTML = `
      <div class="loc-art-row">
        <div class="loc-art-icon"><i class="fas fa-map-marker-alt"></i></div>
        <span class="loc-art-text">Paris, France</span>
      </div>
      <div class="loc-art-row">
        <div class="loc-art-remote"><i class="fas fa-paper-plane"></i></div>
        <span class="loc-art-remote-text">Remote friendly</span>
      </div>
    `;
    document.body.appendChild(widgetLocation);

    // --- HORLOGE CRÉATIVE (sous Location) ---
    const horloge = document.createElement('div');
    horloge.className = 'widget-horloge';
    horloge.innerHTML = `
      <div class="horloge-creative">
        <div class="horloge-ring">
          <svg viewBox="0 0 100 100">
            <circle class="horloge-bg-ring" cx="50" cy="50" r="45"/>
            <circle class="horloge-sec-ring" cx="50" cy="50" r="45"/>
          </svg>
          <div class="horloge-center">
            <span class="horloge-time" id="horloge-time">00:00</span>
            <span class="horloge-seconds" id="horloge-sec">00</span>
          </div>
        </div>
        <div class="horloge-date" id="horloge-date">Lun 01 Jan</div>
      </div>
    `;
    document.body.appendChild(horloge);

    // Mettre à jour l'horloge créative
    const mettreAJourHorloge = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      const s = now.getSeconds();
      const jours = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
      const mois = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];

      document.getElementById('horloge-time').textContent = `${h}:${m}`;
      document.getElementById('horloge-sec').textContent = s.toString().padStart(2, '0');
      document.getElementById('horloge-date').textContent = `${jours[now.getDay()]} ${now.getDate().toString().padStart(2, '0')} ${mois[now.getMonth()]}`;

      // Animer le cercle des secondes
      const secRing = document.querySelector('.horloge-sec-ring');
      if (secRing) {
        const progress = (s / 60) * 283;
        secRing.style.strokeDashoffset = 283 - progress;
      }
    };
    mettreAJourHorloge();
    setInterval(mettreAJourHorloge, 1000);

    // Gérer la visibilité des widgets selon la section
    const gererVisibiliteWidgets = () => {
      const rect = sectionHome.getBoundingClientRect();
      // Les widgets sont visibles seulement quand on est dans la section home
      // Disparaissent dès que le haut de la section home remonte au-dessus de -100px
      const visible = rect.top > -100;

      // Badge Open to work
      badgeOpen.style.opacity = visible ? '1' : '0';
      badgeOpen.style.transform = visible ? 'translateX(0)' : 'translateX(20px)';

      // Widget location créatif
      widgetLocation.style.opacity = visible ? '1' : '0';
      widgetLocation.style.transform = visible ? 'translateX(0)' : 'translateX(-20px)';

      // Horloge
      horloge.style.opacity = visible ? '1' : '0';
      horloge.style.transform = visible ? 'translateX(0)' : 'translateX(20px)';
    };

    window.addEventListener('scroll', gererVisibiliteWidgets);
    gererVisibiliteWidgets();
  }


  // =============================================
  // FILTRAGE CONSTELLATION PROJETS - Animation Stellaire
  // =============================================

  const filtresContainer = document.querySelector('.filtres-constellation');
  const projetCartes = document.querySelectorAll('.etoile-projet');
  const compteurElement = document.querySelector('.compteur-nombre');

  if (filtresContainer && projetCartes.length > 0) {
    const boutonsFiltres = filtresContainer.querySelectorAll('.filtre-btn');
    let enAnimation = false;

    // Fonction de filtrage avec animation stellaire
    const filtrerProjets = (categorie) => {
      if (enAnimation) return;
      enAnimation = true;

      let compteur = 0;
      const cartesVisibles = [];
      const cartesACacher = [];

      // Séparer les cartes à afficher et à cacher
      projetCartes.forEach((carte) => {
        const carteCategorie = carte.dataset.category;
        const doitAfficher = categorie === 'all' || carteCategorie === categorie;

        if (doitAfficher) {
          cartesVisibles.push(carte);
          compteur++;
        } else {
          cartesACacher.push(carte);
        }
      });

      // Phase 1: Animation de sortie en cascade inversée
      cartesACacher.forEach((carte, i) => {
        const delaiSortie = (cartesACacher.length - 1 - i) * 0.04;
        carte.style.animationDelay = `${delaiSortie}s`;
        carte.classList.add('is-exiting');
        carte.classList.remove('is-visible');
      });

      // Phase 2: Après sortie, cacher et afficher les nouvelles
      const delaiTotal = cartesACacher.length > 0 ? cartesACacher.length * 0.04 + 250 : 0;

      setTimeout(() => {
        // Cacher les cartes sorties
        cartesACacher.forEach((carte) => {
          carte.classList.add('is-hidden');
          carte.classList.remove('is-exiting');
          carte.style.animationDelay = '0s';
        });

        // Afficher les nouvelles cartes avec animation stellaire
        cartesVisibles.forEach((carte, i) => {
          carte.classList.remove('is-hidden');

          // Délai progressif pour effet d'allumage des étoiles
          const delai = i * 0.12;
          carte.style.animationDelay = `${delai}s`;

          // Déclencher l'animation stellaire
          requestAnimationFrame(() => {
            carte.classList.add('is-visible', 'is-entering', 'anim-stellar');
          });
        });

        // Phase 3: Nettoyer les classes d'animation
        const dureeAnimation = cartesVisibles.length * 0.12 + 800;
        setTimeout(() => {
          cartesVisibles.forEach((carte) => {
            carte.classList.remove('is-entering', 'anim-stellar');
            carte.style.animationDelay = '0s';
          });
          enAnimation = false;
        }, dureeAnimation);

      }, delaiTotal);

      // Mettre à jour le compteur avec animation
      if (compteurElement) {
        compteurElement.classList.add('compteur-pulse');
        compteurElement.textContent = compteur;
        setTimeout(() => compteurElement.classList.remove('compteur-pulse'), 400);
      }
    };

    // Gérer les clics sur les filtres
    boutonsFiltres.forEach((bouton) => {
      bouton.addEventListener('click', () => {
        if (enAnimation) return;

        // Retirer la classe active de tous les boutons
        boutonsFiltres.forEach((b) => b.classList.remove('active'));

        // Ajouter la classe active au bouton cliqué
        bouton.classList.add('active');

        // Filtrer les projets
        const categorie = bouton.dataset.filter;
        filtrerProjets(categorie);
      });
    });

    // Initialiser tous les projets comme visibles
    projetCartes.forEach((carte) => {
      carte.classList.add('is-visible');
    });
  }


  // =============================================
  // MESSAGE CONSOLE
  // =============================================

  console.log('%c👋 Bienvenue sur mon portfolio!', 'color: #dc143c; font-size: 20px; font-weight: bold;');
  console.log('%cDéveloppé par Oumaima Mahmoudi', 'color: #764BA2; font-size: 14px;');


  // =============================================
  // CURSEUR MÉTÉORITE - Section Constellation
  // =============================================

  const sectionConstellation = document.querySelector('.section-constellation');

  if (sectionConstellation) {
    // Créer le curseur météorite
    const curseurEtoile = document.createElement('div');
    curseurEtoile.className = 'curseur-etoile';
    document.body.appendChild(curseurEtoile);

    let compteurParticules = 0;
    let dernierX = 0;
    let dernierY = 0;

    // Créer une particule lumineuse
    const creerParticule = (x, y) => {
      const particule = document.createElement('div');
      particule.className = 'trainee-particule';

      // Taille décroissante pour effet de traînée
      const taille = Math.random() * 4 + 2;
      particule.style.width = taille + 'px';
      particule.style.height = taille + 'px';
      particule.style.left = x + 'px';
      particule.style.top = y + 'px';

      document.body.appendChild(particule);
      setTimeout(() => particule.remove(), 600);
    };

    // Créer la queue de la météorite
    const creerQueue = (x, y, ancienX, ancienY) => {
      const deltaX = x - ancienX;
      const deltaY = y - ancienY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < 5) return; // Pas de queue si mouvement trop petit

      const queue = document.createElement('div');
      queue.className = 'trainee-queue';

      // Calculer l'angle de la traînée
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      // Longueur proportionnelle à la vitesse
      const longueur = Math.min(distance * 2, 80);

      queue.style.width = longueur + 'px';
      queue.style.left = (x - longueur) + 'px';
      queue.style.top = y + 'px';
      queue.style.transform = `rotate(${angle}deg)`;

      document.body.appendChild(queue);
      setTimeout(() => queue.remove(), 400);
    };

    // Gérer le mouvement de la souris
    sectionConstellation.addEventListener('mousemove', (e) => {
      // Positionner le curseur météorite
      curseurEtoile.style.left = e.clientX + 'px';
      curseurEtoile.style.top = e.clientY + 'px';

      // Créer la queue de météorite
      creerQueue(e.clientX, e.clientY, dernierX, dernierY);

      // Créer des particules tous les 2 mouvements
      compteurParticules++;
      if (compteurParticules % 2 === 0) {
        creerParticule(e.clientX, e.clientY);
      }

      dernierX = e.clientX;
      dernierY = e.clientY;
    });

    // Afficher le curseur quand on entre dans la section
    sectionConstellation.addEventListener('mouseenter', (e) => {
      curseurEtoile.style.opacity = '1';
      dernierX = e.clientX;
      dernierY = e.clientY;
    });

    // Masquer le curseur quand on quitte la section
    sectionConstellation.addEventListener('mouseleave', () => {
      curseurEtoile.style.opacity = '0';
    });
  }

});
