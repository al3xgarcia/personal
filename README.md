# Personal landing page

Single-page personal site built with Vite, React, TypeScript, and Tailwind CSS v4. Inline brand links use Simple Icons (with fallbacks for brands not in the library).

## Setup

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — local development
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build

## Deploy

Push to GitHub and connect the repo to Vercel. Framework preset: Vite. No extra build settings required.

`vercel.json` includes an SPA fallback rewrite for future client-side routes.
