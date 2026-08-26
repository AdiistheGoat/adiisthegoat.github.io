# Plan: Sticky left-rail layout + richer visual detail

## Goal
Fill the empty side space and add visual interest while keeping the academic-minimal style: warm white, near-black, muted gray, single ink-navy accent, Newsreader/Plex fonts, no gradients/glow/glass.

## Layout: sticky left rail (desktop)
Replace the narrow centered column (`max-w-[42rem]`) with a full-width two-column grid, max width ~72rem:

```text
+-------------------+--------------------------------------+
| STICKY LEFT RAIL  |  SCROLLING CONTENT                   |
| (sticky top)      |                                      |
|  AG photo (round) |  Intro paragraph                     |
|  Aditya Goyal     |  News (date | text rows)             |
|  CS·DS·Math, UW   |  Projects (numbered grid, 2 cols)    |
|  Email CV Scholar |  Publications (thumb + links)        |
|  GitHub LinkedIn  |  Experience                          |
|                   |  Writing                             |
|  Nav: News        |  Teaching                            |
|  Projects ...     |  Outside (scuba/squash, side-by-side)|
+-------------------+--------------------------------------+
```

- Left rail (~18rem) is `sticky top-*`: larger round AG placeholder (~176px), name in serif, mono subtitle, contact links, and section navigation stacked vertically with active-style hover.
- Right column holds all sections, each still separated by the existing quiet `border-t` dividers.
- Mobile (<md): rail collapses to a normal stacked header on top (photo + name + links), with the existing horizontal nav; nothing breaks.

## Visual detail (richness ~8/10, still academic)
- Larger serif section numbers/headings: keep mono uppercase labels but add a big Newsreader serif title per section.
- Projects: 2-column grid of numbered cards with thin borders and hover state (border darkens to ink-navy).
- Publications: keep thumbnail, add a subtle bordered panel.
- Experience: year in mono on its own column for a timeline-like rhythm.
- Outside: scuba and squash figures side-by-side in 2 columns on desktop.
- More generous type scale in the intro (larger leading paragraph).
- Everything uses existing tokens only — no new colors, no gradients.

## Files
- `src/routes/index.tsx` — restructure markup into rail + content; enrich sections; mobile fallback.
- `src/styles.css` — only if a small utility/token tweak is needed (e.g. scroll offset).

## Verification
- `bun run build` passes.
- Playwright screenshots at desktop (rail visible, space used) and mobile (stacked, intact).
- Static-export build (`BASE_PATH=/`) still works for GitHub Pages.
