# Nabintou S. Fofana — Portfolio

My personal software engineering portfolio, built with HTML, CSS, and JavaScript. It presents selected projects, my contributions and engineering decisions, earlier coursework, and a résumé available in PDF and Word formats.

I am a Software Engineering student at The University of Texas at Dallas, with freelance experience maintaining a bilingual web platform. My project work spans web applications, Java backend systems, Python data tools, and a private study application.

## Website features

- Responsive layouts for desktop and mobile.
- Selected case studies describing the problem, my role, key decisions, and current status.
- A separate archive for earlier projects and coursework.
- A readable résumé page with PDF and Word downloads.
- Light and dark themes, with a saved preference on the main pages.
- Keyboard navigation support, skip links, and descriptive image text.

## Selected projects

| Project | Focus | My role |
| --- | --- | --- |
| [Schicgirl](projects.html#p01) | Bilingual web platform with memberships and booking tools | Freelance development and maintenance, PostgreSQL access control, session recovery, and consistent French/English data. |
| [NABIELA notes](projects.html#nabiela) | Private study notebook with editable diagrams and local storage | Product direction, AI-assisted implementation, behavior review, and interface refinement. |
| [Math Adventure](projects.html#p02) | Math practice application built with Java and Spring Boot | Team project followed by a solo refactor of services, API responses, and frontend modules. |
| [InsightFlow](projects.html#p06) | CSV cleaning and analysis using Python and Flask | Web application, shared analysis modules, and a companion command-line tool for PDF reports. |
| [TerraScape](projects.html#p11) | Procedural graphics in Unity | Object placement and manipulation, L-system geometry, and team repository documentation. |

The technologies used by these projects are separate from the portfolio website itself. This repository contains the website and its case studies; the case studies link to project repositories where available.

## Run locally

The website is static. No npm installation or frontend build is required.

From the repository root, use Python 3 to serve the website:

```bash
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. On systems where Python 3 is named `python3`, use `python3` instead of `python`.

## Repository structure

| Path | Purpose |
| --- | --- |
| [`index.html`](index.html) | Introduction, featured work, about, and contact. |
| [`projects.html`](projects.html) | Five selected project case studies. |
| [`archive.html`](archive.html) | Earlier projects and coursework. |
| [`resume.html`](resume.html) | Browser résumé and download links. |
| [`Nabintou_Fofana_resume.pdf`](Nabintou_Fofana_resume.pdf), [`Nabintou_Fofana_resume.docx`](Nabintou_Fofana_resume.docx) | Résumé downloads. |
| [`refined.css`](refined.css), [`resume.css`](resume.css) | Styles for the main pages and résumé. |
| [`styles.css`](styles.css), [`archive-refinements.css`](archive-refinements.css) | Archive styling. |
| [`site.js`](site.js) | Theme controls for the main pages. |
| [`images/`](images/) | Project images, portrait, and icons. |
| [`projects/`](projects/) | Supporting project documents. |

## Update the portfolio

Edit `index.html` for the introduction, featured projects, and contact information. Edit `projects.html` for case studies and `archive.html` for earlier work. Place new website images in `images/` and use relative paths when linking them.

Keep project descriptions clear about individual contributions, team ownership, AI assistance, and the current status of each project.

### Update the résumé

1. Update `Nabintou_Fofana_resume.docx`.
2. Export the Word document to PDF as `Nabintou_Fofana_resume.pdf`.
3. Update `resume.html` to match.
4. Review the Word, PDF, and browser versions for matching content, readable spacing, and clipped text.

## Deployment

The website is published with GitHub Pages from the root of the `main` branch. The published root must contain `index.html`.

After deployment, check page navigation, images, theme controls, and both résumé downloads.

## NABIELA notes

NABIELA notes is a private product in development for a future commercial release. Its portfolio entry is a case study only.

The application source, working app HTML, installers, executable files, backups, and app downloads are not distributed through this portfolio. Keep those files outside any public portfolio repository.

## Contact

- Email: [nabintousfofana@gmail.com](mailto:nabintousfofana@gmail.com)
- GitHub: [NabintouSFofana](https://github.com/NabintouSFofana)
- LinkedIn: [nabintousfofana](https://www.linkedin.com/in/nabintousfofana)
