# ramesh-jr.github.io

Personal website for Ramesh Kumar Subramanian, built with [Astro](https://astro.build) and deployed to GitHub Pages.

The site is static, ships almost no JavaScript (only the theme toggle and the command palette), and is designed to be skimmed by recruiters in under a minute while giving hiring managers enough depth to evaluate the work.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the production build
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/profile.ts` | Name, links, contact, resume URL, "open to work" flag |
| `src/data/content.ts` | All page copy: strengths, projects, experience, education, skills |
| `src/pages/index.astro` | The homepage (layout and section styles) |
| `src/components/` | Header (nav and theme toggle), command palette, footer |
| `src/layouts/Base.astro` | `<head>`, SEO tags, JSON-LD, theme bootstrap |
| `src/styles/global.css` | Design tokens (light and dark) and shared primitives |
| `src/assets/` | Images processed by Astro (the portrait) |
| `public/` | Files served as-is: favicon, robots.txt |

To change what the site says, edit `src/data/`. To add a resume download, put a public-safe PDF in `public/` and set `resumeUrl` in `profile.ts`.

## Content rules

This repo and the site are public. Content here is curated for the web: no phone number, no promotion material, no customer names and no confidential metrics. Check anything new against that before committing.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it with GitHub Pages.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Moving to a custom domain

1. Add `public/CNAME` containing the domain.
2. Change `site` in `astro.config.mjs` and the `Sitemap:` line in `public/robots.txt`.
3. Set the custom domain under **Settings → Pages** and point DNS at GitHub Pages.
