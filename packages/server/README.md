# Cadence Forge Server

Express API with MongoDB. Serves the SPA and handles authentication, writing, and project data.

## Development

```bash
npm run dev
```

Uses nodemon for auto-reload. Runs on localhost:3000.

## Build

```bash
npm run build
```

Compiles TypeScript to `dist/` using esbuild-node-tsc.

## Environment

Create a `.env` file

```
MONGO_USER=your_username
MONGO_PWD=your_password
TOKEN_SECRET=your_jwt_secret
```

## API Routes

**Auth (`/auth`)**
- `POST /auth/register` - Create account
- `POST /auth/login` - Get JWT token

**Writing (`/api/writing`)** - Public read, authenticated write
- `GET /` - List all writing
- `GET /:slug` - Get single article
- `POST /` - Create article (auth required)
- `PUT /:slug` - Update article (auth required)
- `DELETE /:slug` - Delete article (auth required)

**Projects (`/api/projects`)** - Public read, authenticated write
- `GET /` - List all projects
- `GET /:slug` - Get single project
- `POST /` - Create project (auth required)
- `PUT /:slug` - Update project (auth required)
- `DELETE /:slug` - Delete project (auth required)

## Structure

```
src/
  index.ts        Express app setup
  models/         Mongoose schemas
  routes/         API route handlers
  services/       MongoDB connection
```

## Production

The server serves static files from `../app/dist` by default. Override with the `STATIC` environment variable.

```bash
# Serve app package (default)
npm run start:app

# Serve proto package
npm run start:proto

# Custom path
STATIC=/path/to/dist npm run start:node
```

## Deploy

```bash
npm run build
nohup node dist/index.js > server.log 2>&1 &
```

Check logs
```bash
cat server.log
```
