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

Vercel (step-by-step)
---------------------

1. Go to your Vercel team: https://vercel.com/new?teamSlug=prashant78793s-projects and click "Import Project" → Git Repository.
2. Select this repository and choose the `main` branch.
3. In the "Root Directory" set `frontend` (this tells Vercel to build the frontend subfolder).
4. Set the Build Command to `npm install && npm run build` and Output Directory to `dist` (the `frontend/vercel.json` file added to the repo already indicates this).
5. Add Environment Variables (if needed) in the Vercel dashboard (for example `VITE_API_BASE` to point to backend URL). Do NOT upload `backend/.env` to the repo.
6. Deploy — Vercel will build and publish the frontend. Your static site URL will be shown in the project dashboard.

Notes on the backend and Vercel
--------------------------------

- Vercel's serverless platform does not run a long-lived Express `app.listen(port)` process without modifying the application to use serverless functions. Since you requested no code changes, deploy the runtime backend elsewhere (Render/Railway/etc.) and point the frontend to that backend URL via environment variables like `VITE_API_BASE`.
- If you want the backend on Vercel, I can help convert endpoints into Vercel Serverless Functions (this requires code edits).

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
