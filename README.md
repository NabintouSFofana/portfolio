# Portfolio — Nabintou S. Fofana

The source code for [my personal portfolio](https://nabintousfofana.github.io/portfolio/).
Built by hand with HTML, CSS, and a small amount of JavaScript — no
frameworks, no build step.

## What's in here

```
portfolio/
├── index.html          home page (hero, currently, selected work, contact)
├── projects.html       the full catalogue of projects
├── styles.css          one stylesheet for both pages
├── images/             photo, work thumbnails, social icons
├── LICENSE             MIT (code), all rights reserved (content)
└── README.md
```

## Tech notes

- **No build step.** It's plain HTML/CSS/JS. Open `index.html` in a browser
  and it works. I wanted to write everything by hand so I'd actually
  understand what's on the page.
- **Light and dark modes.** Auto-detects your OS preference, plus a manual
  toggle in the top bar. The dark palette isn't a hue flip — it's a
  re-keyed version of the editorial cream/rust aesthetic: deep aubergine
  paper, ember accent, warm cream type.
- **Scroll-spy side nav** appears on screens 1180px and wider. The current
  section lights up rust as you scroll.
- **Work-item thumbnail peek** — hover any row in "Selected work" and a
  small project thumbnail slides in from the right.
- **Progressive enhancement.** If JavaScript is disabled, the site still
  loads and reads correctly. The `.js` class on `<html>` (set inline
  before paint) gates the enhancements.
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

Code is MIT. Content (writing, photo, project descriptions) is
copyrighted — see `LICENSE` for the full note.

If you want to use this as a starting point for your own portfolio:
fork it, replace the content with your own, and you're set. A link
back is appreciated but not required.

---

Built in Plano, TX. Contact: [nabintousfofana@gmail.com](mailto:nabintousfofana@gmail.com)
