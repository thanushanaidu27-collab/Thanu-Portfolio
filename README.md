# Thanusha naidu — Developer Portfolio

A modern, fully responsive portfolio site built with React + Vite, Framer Motion, and React Icons. Light theme by default with a dark mode toggle (persisted in localStorage).

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Editing content

Almost everything text-based (name, roles, bio, stats, skills, experience,
projects, services, education, certifications, contact info) lives in one file:

```
src/data/portfolioData.js
```

Update the values there and every section that uses them will update
automatically — no need to touch component code for content changes.

## Replacing the resume

Swap `public/resume.pdf` with your real resume, keeping the same filename
(or update `resumeUrl` in `src/data/portfolioData.js` if you rename it).

## Project structure

```
src/
 ├── assets/            static assets
 ├── components/        one folder per section, each with its own .jsx + .css
 │    ├── Navbar/
 │    ├── Hero/
 │    ├── About/
 │    ├── Skills/
 │    ├── Experience/
 │    ├── Projects/
 │    ├── Services/
 │    ├── Education/
 │    ├── Certifications/
 │    ├── Contact/
 │    ├── Footer/
 │    ├── Loader/
 │    ├── ScrollProgress/
 │    └── ScrollToTop/
 ├── context/
 │    └── ThemeContext.jsx   dark/light mode state + localStorage
 ├── data/
 │    └── portfolioData.js   all editable site content
 ├── App.jsx
 ├── App.css
 ├── index.css           design tokens (colors, fonts, spacing) + globals
 └── main.jsx
```

## Design notes

- Color palette, fonts, radii and shadows are all defined as CSS variables
  in `src/index.css` — change them there to re-theme the whole site.
- Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (labels/eyebrows).
- Dark mode is a `data-theme="dark"` attribute on `<html>`, toggled by
  `ThemeContext` and swapped via CSS variable overrides.
