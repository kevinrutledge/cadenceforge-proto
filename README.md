# Cadence Forge

Personal portfolio and blog built as a monorepo with three packages: a Lit/Mustang SPA, an Express API, and a static prototype for design reference.

Live at [krutledg.csse.dev/app](https://krutledg.csse.dev/app)

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

From the project root:

```bash
git pull
npm install

# Build the frontend
npm -w packages/app run build

# Start server (persists after logout)
nohup npm -w packages/server start > server.log 2>&1 &
```

To check status:

```bash
ps aux | grep node
tail server.log
```

To restart:

```bash
pkill -f node
nohup npm -w packages/server start > server.log 2>&1 &
```
