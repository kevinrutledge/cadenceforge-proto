# Cadence Forge Proto

Static HTML prototype used as the design reference for the app package. This package contains the original styling and layout that the Lit app is migrating toward.

## Purpose

The proto package exists to

- Establish visual design before adding interactivity
- Serve as the source of truth for CSS styling
- Test layouts with static content

The app package should match proto's appearance when complete.

## Development

```bash
npm run dev
```

Runs Vite dev server. Uses the same build setup as the app package for consistency.

## Build

```bash
npm run build
```

Outputs to `dist/`.

## Structure

```
proto/
  index.html         Home page
  about.html         About page
  writing.html       Writing listing
  projects.html      Projects listing
  login.html         Login form
  register.html      Registration form
  writing/           Individual article pages
  projects/          Individual project pages
  series/            Series listing pages
  public/
    styles/          CSS files (reference for app styling)
  src/
    components/      Simple Lit components for lists
```

## Comparing to App

When fixing styling issues in the app package, compare against this package.

- `proto/public/styles/page.css` is the reference stylesheet
- HTML structure in proto pages shows intended markup
- Run both dev servers and compare side-by-side

## Note

This package is not deployed to production. The server package serves from `../app/dist` in production.
