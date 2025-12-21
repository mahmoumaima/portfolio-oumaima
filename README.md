# Portfolio Oumaima Mahmoudi

Portfolio professionnel présentant les compétences et projets de **Oumaima Mahmoudi**, QA Tester certifiée ISTQB avec expertise en Banque & Finance.

**[Voir le portfolio en ligne](https://mahmoumaima.github.io/portfolio-oumaima/)**

---

## Aperçu

Portfolio moderne et responsive présentant 12 projets réalisés dans le cadre de la formation OpenClassrooms Testeur Logiciel. Design immersif avec animations fluides et navigation intuitive.

---

## Structure du projet

```
oumi-portfolio-rempli/
├── index.html                    # Page d'accueil principale
├── projets/                      # Pages détaillées des 12 projets
│   ├── projet-html-initiation.html
│   ├── projet-riding-cities.html
│   ├── projet-booki-accueil.html
│   ├── projet-jse-avocats.html
│   ├── projet-724events-tests.html
│   ├── projet-print-it-carrousel.html
│   ├── projet-site-dynamique-js.html
│   ├── projet-react-kasa.html
│   ├── projet-menu-maker-qwenta.html
│   ├── projet-automatisation-cypress.html
│   ├── projet-tomsen-strategie-test.html
│   └── projet-portfolio-deploiement.html
├── css/
│   ├── style.css                 # Styles principaux (page d'accueil)
│   ├── projet-template.css       # Styles des pages projets
│   └── vendors.min.css           # Librairies CSS minifiées
├── js/
│   ├── script.js                 # JavaScript principal
│   └── projet.js                 # JavaScript pages projets
├── assets/
│   ├── logo.png                  # Logo Oumaima Mahmoudi
│   ├── oumi.png                  # Photo principale
│   ├── oumi-pro.png              # Photo section À propos
│   ├── favicone.png              # Favicon
│   └── homepage.jpg              # Image de fond accueil
├── robots.txt                    # Directives pour les moteurs de recherche
├── sitemap.xml                   # Plan du site pour le SEO
└── README.md                     # Ce fichier
```

---

## Technologies utilisées

### Front-end
| Technologie | Version | Usage |
|-------------|---------|-------|
| HTML5 | - | Structure sémantique |
| CSS3 | - | Stylisation, Flexbox, Grid, Variables CSS |
| JavaScript | ES6+ | Interactions, animations, filtres |

### Librairies CSS
| Librairie | Version | CDN |
|-----------|---------|-----|
| Animate.css | 4.1.1 | Animations d'entrée/sortie |
| Font Awesome | 6.4.0 | Icônes vectorielles |

### Librairies JavaScript
| Librairie | Version | Usage |
|-----------|---------|-------|
| WOW.js | 1.1.2 | Déclenchement animations au scroll |

---

## Fonctionnalités

### Page d'accueil
- **Hero animé** avec effet de typing pour le nom
- **Section Projets** avec filtres interactifs par catégorie (Intégration, QA, JavaScript, React, Automation, Gestion)
- **Effet constellation** avec étoiles animées en arrière-plan
- **Section À propos** avec statistiques animées
- **Section Compétences** avec barres de progression
- **Formulaire de contact** intégré (voir section API)

### Pages projets
- **Bannière immersive** plein écran avec effet parallaxe
- **Section Contexte** présentant mission, objectifs et livrables
- **Timeline interactive** des phases de développement
- **Section Résultats** avec grille de cartes
- **Navigation cyclique** entre les 12 projets

### Responsive Design
- Desktop : > 1024px
- Tablette : 768px - 1024px
- Mobile : < 768px

---

## Optimisations

### Performance
- **Images optimisées** via Unsplash CDN (compression automatique, format adaptatif)
- **Lazy loading** des images hors écran
- **CSS non-critique** chargé de manière asynchrone
- **Preconnect** vers les CDN externes
- **Preload** des ressources critiques (images hero, CSS principal)

### SEO
- **Balises meta** complètes (title, description, keywords)
- **Open Graph** pour le partage sur réseaux sociaux
- **Twitter Cards** pour l'aperçu Twitter
- **URL canonique** définie
- **Robots.txt** configuré
- **Sitemap.xml** généré
- **Structure sémantique** (header, nav, main, section, article, footer)
- **Attributs alt** sur toutes les images

### Accessibilité
- **Navigation clavier** fonctionnelle
- **Contrastes** respectant les normes WCAG
- **Attributs ARIA** sur les éléments interactifs
- **Focus visible** sur les éléments focusables
- **Textes alternatifs** descriptifs
- **Structure de titres** hiérarchique (h1 > h2 > h3)

---

## Intégration API Formulaire

Le formulaire de contact utilise **FormSubmit** pour l'envoi des emails sans backend.

### Configuration
```html
<form action="https://formsubmit.co/YOUR_EMAIL" method="POST">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Envoyer</button>
</form>
```

### Fonctionnalités FormSubmit
- Envoi email sans serveur
- Protection anti-spam (honeypot)
- Redirection après envoi
- Template email personnalisable

---

## Installation locale

```bash
# Cloner le repository
git clone https://github.com/mahmoumaima/portfolio-oumaima.git

# Accéder au dossier
cd portfolio-oumaima

# Ouvrir dans le navigateur
# Option 1 : Ouvrir index.html directement
# Option 2 : Utiliser un serveur local
npx serve .
# ou
python -m http.server 8000
```

---

## Déploiement GitHub Pages

1. **Pousser sur GitHub** :
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

2. **Configurer GitHub Pages** :
   - Aller dans Settings > Pages
   - Source : Deploy from a branch
   - Branch : main / (root)
   - Save

3. **URL de déploiement** :
   `https://mahmoumaima.github.io/portfolio-oumaima/`

---

## Scores Lighthouse

| Catégorie | Score |
|-----------|-------|
| Performance | 95+ |
| Accessibilité | 95+ |
| Bonnes pratiques | 100 |
| SEO | 100 |

---

## Variables CSS personnalisées

```css
/* Couleurs principales */
--couleur-principale: crimson;
--couleur-accent: #764BA2;
--couleur-fond: #0a0a0f;
--couleur-texte: #e0e0e0;

/* Transitions */
--transition-rapide: 0.3s ease;
--transition-lente: 0.6s ease;

/* Ombres */
--ombre-carte: 0 10px 40px rgba(0,0,0,0.3);
--ombre-hover: 0 20px 60px rgba(220,20,60,0.2);
```

---

## Auteur

**Oumaima Mahmoudi**
- QA Tester certifiée ISTQB
- Master 2 Banque & Finance
- Formation OpenClassrooms Testeur Logiciel

### Contact
- LinkedIn : [linkedin.com/in/oumaima-mahmoudi](https://linkedin.com/)
- GitHub : [github.com/mahmoumaima](https://github.com/mahmoumaima)
- Email : contact@oumaima-mahmoudi.fr

---

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

**2025 Oumaima Mahmoudi - Tous droits réservés**
