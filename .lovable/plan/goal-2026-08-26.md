Plan

## Goal

Make the homepage sections feel more distinguished, and swap the scuba/squash generated images for clean placeholders that clearly wait for the user's own photos.

## Changes

1. **Section dividers**
   - Add a thin, full-width horizontal rule (`border-t` or equivalent) between every major content section (`News`, `Projects`, `Publications`, `Experience`, `Writing`, `Teaching`, `Outside`).
   - Keep the warm-white background consistent across all sections so the separation stays quiet and minimal.
   - Keep generous spacing above/below each rule so the page doesn't feel cramped.

2. **Scuba / squash placeholders**
   - Replace the current generated `scuba.jpg` and `squash.jpg` images with two new placeholder images.
   - The placeholders should be neutral (e.g., a soft muted gray block) with a small centered label like "Scuba photo" / "Squash photo" or an icon suggestion, so it is obvious the user will drop in real photos later.
   - Keep the same aspect ratio and border treatment as the existing images so the layout doesn't shift.

3. **Polish**
   - Update image alt text to describe the placeholders accurately.
   - Verify the page still matches the existing warm-white / near-black / ink-navy design system.

## Verification

- Build passes with no errors.
- Visual check confirms dividers appear between sections and placeholders are clearly labeled.
