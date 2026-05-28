# Personal site redesign — drop-in for `resume-site/`

This bundle is a redesign of the **landing page** for marcushenry.ca, built as a
prototype with two switchable visual directions (toggle top-right of the nav, or
the Tweaks panel):

- **Hermes** — dark, serif, vintage technical-manual feel
- **Callum** — light, sans, soft pastel gradient

## How to integrate WITHOUT going live

Your GitHub Actions pipeline deploys `main` → S3, so keep this off `main`:

```bash
# from your repo root
git checkout -b redesign

# copy these files into resume-site/ (overwrites index.html + assets/css/site.css)
#   index.html
#   assets/css/theme.css
#   assets/css/site.css
#   assets/js/data.js
#   assets/js/components.jsx
#   assets/js/app.jsx
#   assets/js/tweaks-panel.jsx   (design-tweak panel; drop before real deploy)

git add -A
git commit -m "WIP: landing page redesign (not for deploy yet)"
# do NOT merge to main / do NOT push to main — live site stays untouched
```

Your existing `images/`, `Marcus-Henry-2026.pdf`, and the Lambda/SAM backend are
unchanged. The visitor-counter fetch still points at your live API Gateway URL.

## Before this ever goes live (not yet)

This prototype transpiles JSX in the browser via CDN React + Babel — fine for
review, not ideal for production. When you're ready to ship, ask me to port it to
plain static HTML/CSS (no React, no Babel) so it loads instantly with zero
dependencies. Also still to do: rebuild `resume.html` and the CMNT case-study
page in the chosen direction.

## Files in this bundle

| File | Purpose |
|---|---|
| `index.html` | Landing page shell |
| `assets/css/theme.css` | Per-theme design tokens (Hermes / Callum) |
| `assets/css/site.css` | Shared layout + components |
| `assets/js/data.js` | All site content (edit your copy here) |
| `assets/js/components.jsx` | React components |
| `assets/js/app.jsx` | App entry + theme toggle |
| `assets/js/tweaks-panel.jsx` | Design-review tweak panel (omit in prod) |
| `assets/photo.png`, `*-architecture.png`, `Marcus-Henry-2026.pdf` | Your existing assets |
