# My Portfolio — Yassir Gattoa

The personal website of **Yassir Gattoa**: English teacher in Tangier, Master's student in
English Language, Culture & Literature at Abdelmalek Essaâdi University (Tétouan), TESOL
certified by World TESOL Academy, and self-taught web developer.

## Design

A paper-and-ink editorial design — warm cream paper, typewriter-red accents, hand-drawn
teacher's marks, and self-hosted fonts (**Fraunces**, **Newsreader Variable**, **IBM Plex Mono**).
No template, no glassmorphism, no stock photos: real facts, real projects, real dates.

## Tech stack

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- Framer Motion (quiet reveals only)
- React Router (HashRouter — works on GitHub Pages out of the box)
- EmailJS for the contact form
- Fonts self-hosted via Fontsource

## Scripts

```bash
npm install       # install dependencies
npm run dev       # local dev server
npm run build     # production build → dist/
npm run typecheck # TypeScript check
npm run deploy    # build + publish to GitHub Pages (gh-pages)
```

## Deploying

- **GitHub Pages** (already configured): `npm run deploy` — the `base` is relative (`./`),
  and routing uses hashes, so it works at `https://yassirxvhy.github.io/My-Portfolio/`
  with zero server configuration.
- **Vercel / Netlify**: just point the platform at the repo, build command `npm run build`,
  output `dist/`. The same build works at a root domain.

## Structure

```
src/
  components/    # Header, Hero, NowStrip, About, Teaching, Education,
                 # Projects, Writing, Toolbox, Contact, Footer, marks, Reveal
  pages/         # Home, ArticleView (writing samples)
  img/           # portrait.jpg, graduation.jpg (optimized)
public/
  Yassir-Gattoa-CV.pdf   # linked from the header & footer
  favicon.svg
```

## Updating content

Everything factual lives at the top of each component as plain arrays
(`education`, `certificates`, `projects`, `articles`…). Edit the array, rebuild, redeploy.

---

© Yassir Gattoa · Tangier, Morocco
