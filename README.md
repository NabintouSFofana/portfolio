# Portfolio — Nabintou S. Fofana

The source code for [my personal portfolio](https://nabintousfofana.github.io/portfolio/).
Built by hand with HTML, CSS, and a small amount of JavaScript — no
frameworks, no build step.

A Software Engineering student at UT Dallas (graduating Spring 2027),
building and shipping real products — including [Schicgirl™](https://schicgirl.me),
a bilingual natural-hair brand whose product suite I develop and maintain
end-to-end as the full-stack engineer.

## What's in here

```
portfolio/
├── index.html          home page (hero · currently · selected work ·
│                        in progress · AI · toolbox · contact)
├── projects.html       the full catalogue of projects
├── styles.css          one stylesheet for both pages
├── images/             photo, work thumbnails, social icons
├── LICENSE             MIT (code), all rights reserved (content)
└── README.md
```

## The projects

The full write-ups live on [`projects.html`](https://nabintousfofana.github.io/portfolio/projects.html);
the home page surfaces a selected few.

1. **Schicgirl™** — a bilingual (FR/EN) natural-hair brand I develop as the
   full-stack engineer; a dozen-plus live pages with admin dashboards, a
   storefront, diagnostic tools, and an AI hair assistant on the Anthropic
   Claude API.
2. **Math Adventure** — a team Spring Boot project I returned to and rebuilt
   solo: Spring services with DI, JSON DTOs, a front end split into ES modules.
3. **Journal de Nabie** — a browser mini-CMS with a hidden admin panel
   (SHA-256 auth, session timeout, brute-force lockout).
4. **Caesar Cipher** — a Java cipher with a web demo and visualization.
5. **Personal Finance Tracker** — a Java/Swing desktop app (FlatLaf UI).
6. **InsightFlow** — a Flask web app + Python CLI that turns a messy CSV into
   a one-page PDF report. [Live demo](https://insightflow-t50k.onrender.com).
7. **JobBoard** — a vanilla-JS job board with an editorial layout.
8. **Portfolio Website** — this site.
9. **SimpleTask** — a per-user task tracker in vanilla JS.
10. **Weather App** — a JS app with a 24-hour forecast over a public API.

## Tech notes

- **No build step.** Plain HTML/CSS/JS — open `index.html` in a browser and
  it works. I wanted to write everything by hand so I'd actually understand
  what's on the page.
- **Light and dark modes.** Auto-detects your OS preference, with a manual
  toggle in the top bar. The dark palette isn't a hue flip — it's a re-keyed
  version of the editorial cream/rust aesthetic: deep aubergine paper, ember
  accent, warm cream type.
- **Scroll-spy side nav** appears on screens 1180px and wider; the current
  section lights up rust as you scroll.
- **Work-item thumbnail peek** — hover any row in "Selected work" and a small
  project thumbnail slides in from the right.
- **Progressive enhancement.** With JavaScript disabled the site still loads
  and reads correctly. The `.js` class on `<html>` (set inline before paint)
  gates the enhancements.
- **Print stylesheet.** Cmd/Ctrl+P produces a designed document, not a
  screenshot.

## Type

- **Fraunces** (variable serif, italic display) for headlines
- **Instrument Sans** for body
- **JetBrains Mono** for labels and meta

## Run it locally

```bash
git clone https://github.com/NabintouSFofana/portfolio.git
cd portfolio
# Just open index.html in your browser.
```

Or serve it if you prefer:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## License

Code is MIT. Content (writing, photo, project descriptions) is copyrighted —
see [`LICENSE`](./LICENSE) for the full note.

If you want to use this as a starting point for your own portfolio: fork it,
replace the content with your own, and you're set. A link back is appreciated
but not required.

---

Built in Plano, TX · [nabintousfofana@gmail.com](mailto:nabintousfofana@gmail.com)
· [LinkedIn](https://www.linkedin.com/in/nabintousfofana)
· [GitHub](https://github.com/NabintouSFofana)
