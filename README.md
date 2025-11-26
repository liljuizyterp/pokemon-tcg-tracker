# Pokemon TCG Tracker (Tailwind Static Site)

This repository contains a minimal static site scaffold that uses Tailwind CSS and a small PostCSS-based build step. The project's build produces a `dist/` folder suitable for deploying to Netlify.

Quick commands:

- Install dependencies:
```bash
npm install
```

- Build the site (includes injecting build-time env vars):
```bash
npm run build
```

- Serve the `dist/` folder locally (optional):
```bash
npm run start
```

Netlify settings (already configured):

- Build command: `npm run build`
- Publish directory: `dist`
- Project URL (Live): https://trackntrade.netlify.app

Environment (Firebase) configuration
-----------------------------------

This project reads Firebase configuration values at build time and injects them into `dist/env.js` so the client-side app can access them at runtime via `window.__ENV__`.

Set these environment variables in Netlify (Site → Settings → Build & deploy → Environment):
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`

Locally, you can set the variables in your shell and run the build, for example:
```bash
export FIREBASE_API_KEY=your_api_key_here
export FIREBASE_AUTH_DOMAIN=your_auth_domain_here
export FIREBASE_PROJECT_ID=your_project_id_here
export FIREBASE_STORAGE_BUCKET=your_storage_bucket
export FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
export FIREBASE_APP_ID=your_app_id

npm ci
npm run build
```

The `env.js` generation script is run automatically as a `prebuild` step and writes `dist/env.js` with the environment values.

Security note: Do not commit any private keys or secrets; use Netlify environment variables for CI and local environment variables for local builds.

Deploy notes & CI
-----------------

- Netlify is set up to automatically build and deploy on pushes to `main` and PRs. If you need to force a build, push a small commit or use Netlify's UI to trigger a deploy.

Creating a PR
-------------

This repo includes a `feature/env-and-readme` branch that introduces a `scripts/generate-env.js` helper and updates `README.md` to add env instructions and Netlify steps.
# Tailwind Static Site

This is a minimal static site scaffold configured with Tailwind CSS and PostCSS. It produces a `dist/` folder suitable for deploying to Netlify.

Quick commands:

- Install dependencies (if you haven't already):
```bash
npm install
```

- Build the site (produces `dist/`):
```bash
npm run build
```

- Serve the `dist/` folder locally (requires `serve`):
```bash
npm run start
```

Netlify settings:

- Build command: `npm run build`
- Publish directory: `dist`

To push to GitHub and connect Netlify, follow the instructions in the repository or use the commands printed by the setup script.
