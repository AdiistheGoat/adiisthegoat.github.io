# Plan: Refine visual appeal without changing structure

## Goal
Make the existing single-page academic site feel more visually engaging and "happening" while keeping the current section order, content, sticky left-rail layout, palette, and fonts intact. No structural restart.

## What stays the same
- Single-page layout with sticky left rail on desktop and stacked header on mobile.
- All sections in current order: Intro, News, Projects, Publications, Research Experience, SWE Experience, Writing, Teaching, Outside Research.
- Warm white background, near-black text, muted gray secondary, single dark ink-navy accent.
- Newsreader serif headings, IBM Plex Sans body, IBM Plex Mono dates/labels/links.
- No gradients, glow, glassmorphism, skill bars, or typing effects.

## Visual refinements to apply

### 1. Intro impact
- Increase the opening serif paragraph size and line-height so it reads like a confident thesis statement.
- Add a thin horizontal ink-navy rule beneath the intro to separate it from the scrolling sections.

### 2. Section rhythm
- Give each section a subtle alternating background tint (slightly warmer off-white) so the long page breaks into readable bands without adding color.
- Keep the existing `border-t` dividers, but make them slightly more pronounced or paired with a small ink-navy section marker.

### 3. Section headings
- Keep the Newsreader heading, but add a small mono uppercase eyebrow label above each heading (e.g., "01 / News") for editorial structure.

### 4. Project cards
- Keep the 2-column grid.
- Add a very light background tint, crisper border radius, and a more distinct hover state (slight lift + ink-navy border).
- Keep the numbered label but make it larger and more decorative.

### 5. Publications
- Turn the publication entry into a cleaner panel: thumbnail on the left, title/authors/venue stacked, links as pill-shaped mini buttons or underlined navy links.
- Add a subtle shadow or border to make the paper feel like a real object.

### 6. Experience blocks
- Add a thin vertical timeline line connecting research and SWE entries.
- Use a small ink-navy dot marker at each year.
- Keep the one-line italic reflection but give it a subtle left border or quote styling.

### 7. Writing & Teaching lists
- Add subtle hover background tints and slightly more defined link underlines.
- For teaching, use a two-column layout on desktop (course / role+years).

### 8. Outside Research
- Keep side-by-side scuba/squash figures but add cleaner figcaption spacing and a subtle caption divider.

### 9. Micro-interactions
- Smooth scroll for anchor nav.
- Link hover: ink-navy underline reveal or color shift.
- Card hover: border color + translateY(-2px) lift.

## Files to edit
- `src/routes/index.tsx` — apply all visual refinements to markup and classes.
- `src/styles.css` — add only the minimal global utilities needed (e.g., smooth scroll, hover transition utilities).

## Verification
- `bun run build` passes.
- Playwright screenshots confirm desktop and mobile still read as simple, sweet, academic, but with more visual polish.
