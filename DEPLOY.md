Quick deployment guide
======================

This repository contains a Node/Express backend in `backend/` and a Vite React frontend in `frontend/`.

Local Docker deployment
-----------------------

1. Ensure Docker and Docker Compose are installed.
2. From repository root, create a `.env` or set env vars in your shell. Required:

   - `DB_URL` — MongoDB connection string
   - (optional) `ALLOWED_ORIGINS` — comma-separated list of allowed frontend origins (defaults to localhost:5173,5174)

3. Build and run:

```bash
docker compose build
DB_URL="<your-mongo-url>" docker compose up
```

The backend will be available at `http://localhost:4000` and the frontend at `http://localhost:5173`.

Deploying frontend (recommended platforms)
----------------------------------------

- Vercel: Create a new project, point to this repo, set framework to `Vite`. Build command: `npm run build`, Output directory: `dist`.
- Netlify: Connect repo, set build command `npm run build`, publish directory `dist`.
- Static artifacts are generated into `frontend/dist` after `npm run build`.

Deploying backend (recommended platforms)
---------------------------------------

- Render / Heroku / Railway / Fly.io: Create a Node web service using the `backend/` subfolder as root (or create a separate repo). Set env var `DB_URL` and optionally `ALLOWED_ORIGINS` for CORS.

  - Render example:
    - Build command: `npm install`
    - Start command: `npm start`
    - Environment: `DB_URL` (set to your MongoDB)

Docker Images & Cloud
---------------------

You can build and push the provided Docker images to any container registry and deploy to services like AWS ECS, Azure Container Instances, or Google Cloud Run.

CI/CD
-----

I can add GitHub Actions workflows to build and push images to GitHub Container Registry and/or deploy to Render/Vercel if you want—provide API keys/secrets.

Next steps I can take for you
-----------------------------

- Add GitHub Actions to auto-build and push images.
- Add Render or Vercel deployment workflows (requires secrets).
- Set up a managed MongoDB (MongoDB Atlas) and help setting env vars.
