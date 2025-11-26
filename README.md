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
