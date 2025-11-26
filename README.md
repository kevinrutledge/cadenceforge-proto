# Cadence Forge

Personal portfolio and blog built as a monorepo with three packages: a Lit/Mustang SPA, an Express API, and a static prototype for design reference.

Live at [krutledg.csse.dev](https://krutledg.csse.dev)

## Project Structure

```
packages/
  app/      Lit + Mustang SPA (production frontend)
  server/   Express API with MongoDB
  proto/    Static HTML prototype (design reference)
```

## Quick Start

Install dependencies from the root:

```bash
npm install
```

Start the server (serves the app):

```bash
cd packages/server
npm run dev
```

For frontend development with hot reload:

```bash
cd packages/app
npm run dev
```

The app dev server runs on localhost:5173 with a proxy to the API. The server runs on localhost:3000.

## Tech Stack

**Frontend** - Lit 3, @calpoly/mustang (MVU framework), TypeScript, Vite

**Backend** - Express, MongoDB/Mongoose, JWT authentication

**Styling** - CSS custom properties, no shadow DOM (components render to light DOM)

## Deployment

From packages/server

```bash
npm run build
nohup node dist/index.js > server.log 2>&1 &
```

Build the app first if frontend changes were made:

```bash
cd packages/app
npm run build
```

The server serves static files from `../app/dist` by default.
