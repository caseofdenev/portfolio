# Denev Kim — Portfolio

Personal portfolio site for Denev DoKyung Kim, SaMD Product Manager.

## Tech stack
- React 18 + Vite 5
- CSS Modules
- React Router (HashRouter for GitHub Pages)
- Fonts: Pretendard (CDN) + Montserrat (Google Fonts)

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview   # preview production build locally
```

## Deployment
Auto-deployed to GitHub Pages via GitHub Actions on push to `main`.

**Setup (one-time):**
1. Push this repo to GitHub
2. Go to Settings → Pages → Source: **GitHub Actions**
3. Push to `main` — Actions will build and deploy automatically

> If your repo name is `username.github.io`, `vite.config.js` base is already set to `/`.  
> If it's a project repo (e.g. `portfolio`), change `base` in `vite.config.js` to `'/portfolio/'`.
