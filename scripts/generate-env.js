#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Load .env.local for local development
if (fs.existsSync('.env.local')) {
  require('dotenv').config({ path: '.env.local' });
}

const env = {
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || '',
  FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || '',
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || '',
  FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET || '',
  FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
  FIREBASE_APP_ID: process.env.FIREBASE_APP_ID || ''
};

const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

const out = `window.__ENV__ = ${JSON.stringify(env, null, 2)};`;
fs.writeFileSync(path.join(distDir, 'env.js'), out);
console.log('Wrote dist/env.js');
