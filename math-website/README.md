# Math Website (GitHub Pages Ready)

A clean, responsive math website powered by plain HTML/CSS and MathJax.
No build step required — just push to GitHub and enable Pages.

## Quick start (GitHub Pages)

1. Create a new GitHub repo (e.g. `math-website`).  
2. Download this folder as a ZIP and unzip it.  
3. Commit & push everything to the **`main`** branch of your repo.  
4. In the repo: **Settings → Pages → Build and deployment → Source = Deploy from a branch**.  
   - Branch: `main`
   - Folder: `/ (root)`
5. Visit the Pages URL GitHub gives you (usually `https://<your-user>.github.io/<repo>/`).

## Customize

- Edit `index.html` (homepage blurb, featured links).
- Add new posts by duplicating `posts/post-template.html` and linking them from `index.html` or `posts/index.html`.
- Math is written inline with LaTeX: `$ ... $` and display with `$$ ... $$`.
- Global styles live in `assets/style.css`.

## Optional

- Change site title in each page’s `<title>` and the navbar.
- Replace `assets/favicon.svg`.
- Add analytics by placing your snippet before `</head>`.
