# Cadence Forge App

Single-page application built with Lit and @calpoly/mustang. This is the production frontend for the portfolio.

## Development

```bash
npm run dev
```

Runs on localhost:5173 with hot module replacement. The Vite dev server proxies API requests to localhost:3000, so you'll need the server running too.

## Build

```bash
npm run build
```

Outputs to `dist/`. The server package serves these files in production.

## Architecture

The app follows MVU (Model-View-Update) using mustang's primitives.

**Model (`model.ts`)** - Application state shape

**Messages (`messages.ts`)** - All possible state transitions

**Update (`update.ts`)** - Pure functions that handle messages and return new state

**Views (`views/`)** - Lit components that render state and dispatch messages

## Components

All custom elements render to light DOM via `createRenderRoot() { return this; }`. This allows global CSS to style everything directly.

```
src/
  components/
    header.ts     Site header with nav, auth state, scroll behavior
    footer.ts     Site footer
  views/
    home-view.ts         Landing page
    about-view.ts        About page
    writing-list-view.ts Article listing
    writing-view.ts      Individual article (markdown rendered)
    writing-edit.ts      Article editor (auth required)
    project-list-view.ts Project listing
    project-view.ts      Individual project
    project-edit.ts      Project editor (auth required)
```

## Routing

Client-side routing handled by mustang's Switch component. Routes defined in `main.ts`

- `/app` - Home
- `/app/about` - About
- `/app/writing` - Writing list
- `/app/writing/:slug` - Individual article
- `/app/writing/:slug/edit` - Edit article (kevin only)
- `/app/projects` - Projects list
- `/app/projects/:slug` - Individual project
- `/app/projects/:slug/edit` - Edit project (kevin only)

## Authentication

Auth state managed through mustang's Auth provider. The app observes auth changes to show/hide edit links and protect edit routes. Only the user "kevin" can access edit functionality.

## Styling

Styles live in `public/styles/`. No shadow DOM means all CSS applies globally. The header uses scroll-direction detection to hide on scroll down and show on scroll up.
