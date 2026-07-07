# Open4D Website

Static website for [Open4D](https://github.com/SINRG-Lab/Open4D) — an open platform for
time-varying 4D geometry data.

## Structure

```
├── index.html           # Home — hero, news, features, modules preview, quickstart, citation
├── modules.html         # Research modules (N4MC, TSMC, TVMC, Unity decoder, ARAP, editing)
├── documentation.html   # Docs — install, quickstart, data model, core API, FAQ
├── gallery.html         # Sample figures and diagrams
├── benchmarks.html      # Evaluation methodology, benchmark anatomy, datasets
├── about.html           # Mission, team, roadmap, contributing, citation
├── css/style.css        # Shared design system
├── js/main.js           # Nav toggle, copy buttons, scroll reveal, sidebar scrollspy
└── assets/              # Figures (ecosystem PNG from the repo + custom SVGs)
```

## Local preview

Any static server works:

```bash
python3 -m http.server 4173
# open http://localhost:4173
```

## Deploying

The site is plain HTML/CSS/JS with no build step — it can be hosted on GitHub Pages,
Netlify, or any static host as-is.

## Notes

- Charts in the gallery are marked *illustrative* — replace with measured results as
  benchmarks are published.
- News dates on the home page are placeholders — edit `index.html` to match real release dates.
