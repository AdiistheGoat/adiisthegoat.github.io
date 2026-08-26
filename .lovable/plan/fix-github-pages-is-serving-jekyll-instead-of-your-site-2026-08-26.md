# Fix: GitHub Pages is serving Jekyll instead of your site

## What's actually happening

`https://adiisthegoat.github.io/` currently returns a Jekyll-generated page ("Aditya's AI Adventures", `Jekyll v3.10.0`, a Jekyll theme stylesheet). That means GitHub Pages for this repo is set to **Deploy from a branch**, so it ignores the deploy workflow and renders your repo's markdown/README through Jekyll's default theme. Your actual site build never gets published — that's why "all the UI is gone".

## Fix (one setting + one safety file)

1. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**. This is the essential step and only you can do it.
2. Re-run the "Deploy to GitHub Pages" workflow (Actions tab → Run workflow), or push any commit to `main`.

## Code change

Add an empty `public/.nojekyll` file so Pages never runs Jekyll over the built output (this also protects asset folders whose names start with `_`). No other changes are needed — the workflow already resolves the base path to `/` for a `<owner>.github.io` repo, and `vite.config.ts` is correct.

## Verification

After the workflow run finishes green, the live page should return your own HTML (Newsreader/IBM Plex fonts, the AG header, sticky nav) instead of the Jekyll theme markup.
