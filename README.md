# Oumaima Mahmoudi | Portfolio Professionnel

Portfolio interactif concu et developpé from scratch pour presenter mon profil et les projets réalisés durant ma formation OpenClassRoom Testeuse Logiciel.

Demo: https://mahmoumaima.github.io/portfolio-oumaima/

## Fonctionnalites
- Page d'accueil one-page
- Pages projets detaillees (12 projets)
- Animations CSS et interactions JavaScript
- Design responsive
- Optimisations performance, SEO et accessibilite

## Stack technique
| Technologie | Version | Usage |
|-------------|---------|-------|
| HTML5 | - | Structure semantique, accessibilite |
| CSS3 | - | Variables CSS, Flexbox, Grid, Animations |
| JavaScript | ES6+ | Classes, IntersectionObserver, Canvas API |
| Animate.css | 4.1.1 | Animations d'entree |
| Font Awesome | 6.4.0 | Icones |
| WOW.js | 1.1.2 | Declenchement animations au scroll |

## Installation
```bash
git clone https://github.com/mahmoumaima/portfolio-oumaima.git
cd portfolio-oumaima
```

## Utilisation
Ouvrir `index.html` dans un navigateur, ou lancer un serveur local:

```bash
# Option 1
python -m http.server 8000

# Option 2
npx serve .
```

Le site sera accessible sur `http://localhost:8000` ou `http://localhost:3000`.

## Structure du projet
```text
portfolio-oumaima/
├── index.html                    # Page d'accueil (One-page)
├── projets/                      # 12 pages projets detaillees
│   ├── projet-automatisation-cypress.html
│   ├── projet-724events-tests.html
│   ├── projet-tomsen-strategie-test.html
│   ├── projet-jse-avocats.html
│   ├── projet-booki-accueil.html
│   ├── projet-react-kasa.html
│   ├── projet-print-it-carrousel.html
│   ├── projet-site-dynamique-js.html
│   ├── projet-menu-maker-qwenta.html
│   ├── projet-riding-cities.html
│   ├── projet-html-initiation.html
│   └── projet-portfolio-deploiement.html
├── css/
│   ├── style.css                 # Styles principaux
│   ├── projet-template.css       # Template pages projets
│   └── vendors.min.css           # Librairies CSS minifiees
├── js/
│   ├── script.js                 # Logique principale
│   ├── projet.js                 # Interactions pages projets
│   └── contact.js                # Validation formulaire
├── assets/
│   ├── logo.png
│   ├── oumi.png                  # Photo hero
│   ├── oumi-pro.png              # Photo section A propos
│   ├── favicone.png
│   └── homepage.jpg              # Image banniere
├── robots.txt
└── sitemap.xml
```

## Deploiement
Le portfolio est deploye sur **GitHub Pages**.

Configuration:
1. Settings > Pages
2. Source : Deploy from a branch
3. Branch : `main` / `/ (root)`

URL de production:
```
https://mahmoumaima.github.io/portfolio-oumaima/
```

## Licence
2025 Oumaima Mahmoudi - Testeuse Logiciel

## Contact
- Portfolio: https://mahmoumaima.github.io/portfolio-oumaima/
- GitHub: https://github.com/mahmoumaima

