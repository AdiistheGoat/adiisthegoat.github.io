# Static-export the site to GitHub Pages

## Goal
Make this personal academic site work on GitHub Pages as a fully static site.

## Verified current state
- The app has one content route: `/` (`src/routes/index.tsx`).
- There are no `createServerFn` server functions, no API routes under `src/routes/api/`, no auth, and no database calls.
- `src/routes/__root.tsx` only provides the root shell, fonts, styles, and error/404 components.
- `src/router.tsx` creates the router with a `QueryClient`, but no active data fetching is used.

In short: **every visible piece of the homepage is static content** — intro, news, projects, publications, experience, writing, teaching, outside-research, images, fonts, and CSS. The only "dynamic" layer is the TanStack Start runtime that hydrates the page after load.

## Approach
Because the page content is already static, we can prerender it to plain HTML/CSS/JS and serve it from GitHub Pages. We will:

1. Enable TanStack Start SSG/prerender for the root route.
2. Set the correct `base` path in Vite for GitHub Pages:
   - `/` for a user/org site (`adityagoyal.github.io`)
   - `/repo-name/` for a project site (`adityagoyal.github.io/repo-name`)
3. Make client-side routing safe for a static host (only one route, so this is mostly a 404 fallback).
4. Add a GitHub Actions workflow to build and deploy to Pages automatically on every push to `main`.
5. Verify the static output and the live GitHub Pages URL.

## Trade-offs
- GitHub Pages is static-only. If you later want server functions, a database, auth, or a contact form, you would need to move to a full-stack host (e.g., Lovable publish, Vercel, Netlify, Cloudflare Pages).
- The site will still hydrate client-side with TanStack Router, so in-page navigation and scroll-to-section will keep working.

## Open question before implementation
- Is this for a **user/org GitHub Pages site** (`adityagoyal.github.io`) or a **project site** (`adityagoyal.github.io/repo-name`)? This determines the Vite `base` path.
