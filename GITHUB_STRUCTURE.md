# GitHub Repository Structure Guide

## Recommended Organization for Portfolio Repository

### Current Structure
```
portfolio/
├── index.html              # Home/landing page
├── projects.html           # Projects showcase page
├── styles.css             # All styling (shared between pages)
├── images/               # All project & icon images
│   ├── schicgirl.png
│   ├── schicgirl.webp
│   ├── math-adventure.png
│   ├── math-adventure.webp
│   ├── ... (other project images)
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── email.svg
│   ├── github.svg
│   ├── linkedin.svg
│   └── site.webmanifest
├── projects/              # Project files & documentation
│   └── SE4381_Team3_Final_Presentation.pdf
├── .gitignore            # (Recommended additions below)
├── README.md             # Repository overview
├── CLAUDE.md            # Development notes
└── package.json         # Dependencies (if using Node/npm)

```

## Recommended .gitignore Entries

```
# OS
.DS_Store
Thumbs.db

# Dependencies
node_modules/
package-lock.json

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# Build artifacts
dist/
build/

# Environment
.env
.env.local

# Logs
*.log
npm-debug.log*

# MacOS specific
*.code-workspace

# Exclude node_modules subdirectories from future commits
/node_modules/
```

## File Organization Best Practices

### ✅ What's Currently Good
- Minimal file count (clean repo)
- HTML + CSS + JS in root (easy to deploy)
- All images in `images/` directory
- Related project files in `projects/` folder

### 🔧 Improvements to Consider

#### If Adding Documentation
```
docs/
├── CONTRIBUTING.md       # How to contribute
├── DEPLOYMENT.md        # Deployment instructions
├── DESIGN_NOTES.md      # Design decisions
└── TECH_STACK.md        # Technologies used
```

#### If Organizing by Feature
Since this is a static portfolio, the current flat structure is ideal. No need for feature-based folders.

#### If Adding Multiple CSS/JS Files (future)
```
assets/
├── css/
│   ├── styles.css
│   ├── dark-mode.css    # (if extracted)
│   └── animations.css   # (if extracted)
├── js/
│   ├── main.js
│   ├── scroll-spy.js
│   └── cursor.js
└── images/
    └── ... (existing)
```

## Commit Message Guidelines

### Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New feature (e.g., new project added)
- `fix`: Bug fix (e.g., broken link, image not loading)
- `docs`: Documentation update (e.g., README)
- `style`: Formatting, no logic change
- `refactor`: Code reorganization
- `perf`: Performance optimization
- `test`: Adding tests (if applicable)
- `chore`: Dependencies, build config

### Examples
```
feat(projects): add Event Planning project with final presentation

fix(images): add missing WebP versions for terrascape and schicgirl

docs(image-guide): add authoritative naming reference for all project images

style(index): remove "by hand" phrase from footer comment
```

## GitHub Actions / CI Recommendations (Optional)

For future automation:
```yaml
name: Link Checker
on: [push, pull_request]
jobs:
  links:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Check links
        uses: gaurav-nelson/github-action-markdown-link-check@v1
```

## Repository Badges (README.md Ideas)

```markdown
[![MIT License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
![Last Updated](https://img.shields.io/github/last-commit/NabintouSFofana/portfolio)
![Repo Size](https://img.shields.io/github/repo-size/NabintouSFofana/portfolio)
```

## Summary
- Keep the flat structure (works well for this portfolio)
- Ensure all images have both PNG and WebP versions
- Use clear commit messages documenting changes
- Consider adding `.gitignore` if not already present
- Don't overcomplicate with unnecessary folders
