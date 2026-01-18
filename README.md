# Oumaima Mahmoudi | Portfolio Professionnel

Portfolio interactif concu et developpe from scratch pour presenter mon profil de **Testeuse QA** avec une double expertise en **Assurance Qualite Logicielle** et **Banque & Finance**.

[Voir le portfolio en ligne](https://mahmoumaima.github.io/portfolio-oumaima/)

---

### Certifications & Formation

| Certification | Organisme | Domaine |
|---------------|-----------|---------|
| ISTQB Foundation Level (en cours) | ISTQB | Assurance Qualite |
| Testeur Logiciel | OpenClassrooms | Tests & Automatisation |
| Master 2 Banque & Finance | Universite | Finance & Systemes bancaires |

---

## Le Portfolio : Un projet a part entiere

Ce portfolio n'est pas un simple template : c'est un projet de developpement complet que j'ai concu et code entierement, mettant en pratique mes competences en integration web, animations CSS avancees et JavaScript moderne.

---

### Structure du projet

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
│   ├── style.css                 # 2600+ lignes - Styles principaux
│   ├── projet-template.css       # Template pages projets
│   └── vendors.min.css           # Librairies CSS minifiees
├── js/
│   ├── script.js                 # 850+ lignes - Logique principale
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

### Stack technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| HTML5 | - | Structure semantique, accessibilite |
| CSS3 | - | Variables CSS, Flexbox, Grid, Animations |
| JavaScript | ES6+ | Classes, IntersectionObserver, Canvas API |
| Animate.css | 4.1.1 | Animations d'entree |
| Font Awesome | 6.4.0 | Icones |
| WOW.js | 1.1.2 | Declenchement animations au scroll |

### Techniques CSS avancees utilisees

| Technique | Application |
|-----------|-------------|
| CSS Variables | Palette de couleurs, transitions, ombres |
| `backdrop-filter: blur()` | Navigation, widgets, cartes verre |
| `clip-path` | Formes personnalisees |
| `@keyframes` | 15+ animations personnalisees |
| CSS Grid | Grille projets responsive |
| `clamp()` | Typographie fluide |
| Pseudo-elements | Decorations, effets de survol |
| `transform-style: preserve-3d` | Effets 3D cartes |

### Techniques JavaScript modernes

| Technique | Application |
|-----------|-------------|
| IntersectionObserver | Animations au scroll, lazy loading |
| Canvas API | Particules magiques section hero |
| Classes ES6 | ParticuleMagique avec physique |
| Event delegation | Filtres projets |
| requestAnimationFrame | Animations fluides 60fps |
| Template literals | Generation HTML dynamique |
| Destructuring | Gestion des dimensions carrousel |

---

## Pages projets : Template immersif

Chaque projet dispose d'une page dediee avec :

**Hero immersif plein ecran**
- Image de fond avec overlay degrade
- Badge categorie anime
- Tags technologies
- Indicateur de scroll personnalise

**Section contexte**
- Cartes verre (`backdrop-filter`) pour mission et details
- Grille technologies avec icones
- Informations client, role, duree

**Timeline interactive**
- Ligne de progression animee
- Points numerotes avec effet de survol
- Cartes phases avec tags

**Section resultats**
- Grille de cartes avec icones
- Navigation vers projets precedent/suivant

---

## Optimisations realisees

### Performance

| Optimisation | Implementation |
|--------------|----------------|
| Lazy loading | Images avec `loading="lazy"` |
| Preconnect | CDN externes (fonts, images) |
| Preload | Ressources critiques (CSS, images hero) |
| CSS async | `media="print" onload="this.media='all'"` |
| Defer JS | Scripts non-bloquants |
| CDN images | Unsplash avec parametres `auto=format&fit=crop` |

### SEO

| Element | Implementation |
|---------|----------------|
| Meta tags | Title, description, keywords, author |
| Open Graph | og:title, og:description, og:image, og:locale |
| Twitter Cards | summary_large_image |
| JSON-LD | Schema Person + WebSite |
| Canonical URL | Definie |
| robots.txt | Configure |
| sitemap.xml | 13 pages indexees |

### Accessibilite

| Critere WCAG | Implementation |
|--------------|----------------|
| 1.1.1 Non-text Content | Alt descriptifs sur toutes les images |
| 1.3.1 Info and Relationships | Structure semantique HTML5 |
| 1.4.3 Contrast | Ratios conformes |
| 2.1.1 Keyboard | Navigation clavier complete |
| 2.4.6 Headings | Hierarchie h1 > h2 > h3 |
| 2.5.5 Target Size | Zones cliquables adequates |
| `prefers-reduced-motion` | Animations desactivees si preference utilisateur |
| `.cache-accessible` | Texte cache pour lecteurs d'ecran |
| `aria-label` | Labels sur boutons icon-only |

### Scores Lighthouse

| Metrique | Score |
|----------|-------|
| Performance | 95+ |
| Accessibilite | 95+ |
| Best Practices | 100 |
| SEO | 100 |

---

## Projets presentes

### Tests & Automatisation

| Projet | Description | Technologies |
|--------|-------------|--------------|
| **Eco Bliss Bath** | Automatisation E2E e-commerce, tests API, detection XSS | Cypress, Mochawesome |
| **724events** | Tests fonctionnels plateforme evenementielle | React Testing, Debug |
| **JSE Avocats** | Tests fonctionnels site WordPress | Cahier de recette |
| **Tomsen PayForge** | Strategie de test application paiement | Plan de test, Gestion risques |

### Integration Web

| Projet | Description | Technologies |
|--------|-------------|--------------|
| **Booki** | Integration responsive plateforme hebergement | HTML, CSS, Flexbox |
| **Kasa** | Refonte application location immobiliere | React, React Router |
| **Portfolio Sophie Bluel** | Integration API portfolio architecte | JavaScript, API REST, Modal |
| **Print it** | Carrousel dynamique | JavaScript, DOM |

### Gestion de Projet

| Projet | Description | Livrables |
|--------|-------------|-----------|
| **Menu Maker Qwenta** | Role Product Owner | Backlog, User Stories, Kanban |
| **Portfolio QA** | Audit et deploiement | Rapport d'audit, Corrections SEO |

---

## Competences techniques

### Tests & Automatisation

| Competence | Niveau | Outils |
|------------|--------|--------|
| Tests E2E | Avance | Cypress |
| Tests fonctionnels | Avance | Cahier de recette, Cas de test |
| Tests exploratoires | Avance | Techniques ISTQB |
| Tests API | Intermediaire | Postman, Swagger |

### Developpement Web

| Technologie | Niveau |
|-------------|--------|
| HTML5 / CSS3 | Avance |
| JavaScript ES6+ | Intermediaire |
| React | Notions |
| DevTools | Avance |

### Outils & Methodologies

| Categorie | Outils |
|-----------|--------|
| Gestion de projet | Jira, Trello, Notion |
| Versionning | Git, GitHub |
| Design | Figma |
| Methodologies | Agile/Scrum, CI/CD, ISTQB |

---

## Installation locale

```bash
# Cloner le repository
git clone https://github.com/mahmoumaima/portfolio-oumaima.git
cd portfolio-oumaima

# Lancer un serveur local
npx serve .
# ou
python -m http.server 8000
```

Le site sera accessible sur `http://localhost:3000` ou `http://localhost:8000`.

---

## Deploiement

Le portfolio est deploye sur **GitHub Pages**.

### Configuration

1. Settings > Pages
2. Source : Deploy from a branch
3. Branch : `main` / `/ (root)`

### URL de production

```
https://mahmoumaima.github.io/portfolio-oumaima/
```

---

## Contact

**Oumaima Mahmoudi**
QA Tester | ISTQB Certified to be | Banking & Finance Expert

| Plateforme | Lien |
|------------|------|
| Portfolio | [mahmoumaima.github.io/portfolio-oumaima](https://mahmoumaima.github.io/portfolio-oumaima/) |
| LinkedIn | [linkedin.com/in/oumaima-mahmoudi](https://linkedin.com/) |
| GitHub | [github.com/mahmoumaima](https://github.com/mahmoumaima) |

---

## Licence

MIT License - 2025 Oumaima Mahmoudi
