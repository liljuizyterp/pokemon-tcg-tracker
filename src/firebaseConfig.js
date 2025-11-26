// Expose Firebase config from build-time env (window.__ENV__) or process.env (if bundler uses env replacement)
export const firebaseConfig = {
  apiKey: (typeof process !== 'undefined' && process.env && process.env.FIREBASE_API_KEY) || (typeof window !== 'undefined' && window.__ENV__ && window.__ENV__.FIREBASE_API_KEY) || '',
  authDomain: (typeof process !== 'undefined' && process.env && process.env.FIREBASE_AUTH_DOMAIN) || (typeof window !== 'undefined' && window.__ENV__ && window.__ENV__.FIREBASE_AUTH_DOMAIN) || '',
  projectId: (typeof process !== 'undefined' && process.env && process.env.FIREBASE_PROJECT_ID) || (typeof window !== 'undefined' && window.__ENV__ && window.__ENV__.FIREBASE_PROJECT_ID) || '',
  storageBucket: (typeof process !== 'undefined' && process.env && process.env.FIREBASE_STORAGE_BUCKET) || (typeof window !== 'undefined' && window.__ENV__ && window.__ENV__.FIREBASE_STORAGE_BUCKET) || '',
  messagingSenderId: (typeof process !== 'undefined' && process.env && process.env.FIREBASE_MESSAGING_SENDER_ID) || (typeof window !== 'undefined' && window.__ENV__ && window.__ENV__.FIREBASE_MESSAGING_SENDER_ID) || '',
  appId: (typeof process !== 'undefined' && process.env && process.env.FIREBASE_APP_ID) || (typeof window !== 'undefined' && window.__ENV__ && window.__ENV__.FIREBASE_APP_ID) || ''
};
