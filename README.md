# Portfolio Oumaima Mahmoudi

## Structure
- `index.html` : page d’accueil avec cartes projets.
- `projets/` : pages détaillées des projets (template + sections ressources, code, mockups).
- `css/` : styles globaux (`style.css`) et template projet (`projet-template.css`).
- `js/` : scripts d’interaction (`script.js`, `contact.js`).
- `assets/` : images, logos, favicons.
- `robots.txt` / `sitemap.xml` : SEO de base pour GitHub Pages.

## Développement local
1. Cloner le dépôt :
   ```bash
   git clone https://github.com/mahmoumaima/portfolio-oumaima.git
   cd portfolio-oumaima
   ```
2. Ouvrir `index.html` dans le navigateur (site statique, pas de build).

## Ajout d’un projet
1. Dupliquer `projets/projet-template.html` et le renommer (ex. `projet-nouveau.html`).
2. Mettre à jour le contenu : titres, client, rôle, durée, tags, ressources, liens Git.
3. Ajouter la carte dans `index.html` (section `#projects`) avec image, titre, description courte et liens (page + repo).
4. Placer les visuels dans `assets/projets/<slug>/`.

## Accessibilité / UX
- Navigation burger + ancre smooth scroll.
- Scroll indicator, barre de progression en haut.
- Mockup-track : défilement vertical des visuels, liste “Résultats finaux” calée à la hauteur du mockup avec scroll interne.

## SEO
- `robots.txt` et `sitemap.xml` pointent vers `https://mahmoumaima.github.io/portfolio-oumaima/`.
- Balises meta de base dans `index.html` et pages projet.

## Ignorés (.gitignore)
- Dépendances/builds : `node_modules/`, caches.
- Fichiers d’IDE/OS : `.vscode/`, `.idea/`, `.DS_Store`, `Thumbs.db`.
- Configs locales : `.env`, fichiers de lock npm.

