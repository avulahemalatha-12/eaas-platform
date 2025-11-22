// Polyfill Web Crypto API (globalThis.crypto.getRandomValues) for older Node versions
// This file is intentionally CommonJS and is meant to be preloaded with `-r`.
if (typeof globalThis.crypto === 'undefined' || typeof globalThis.crypto.getRandomValues !== 'function') {
  try {
    const { webcrypto } = require('crypto');
    if (webcrypto && typeof webcrypto.getRandomValues === 'function') {
      globalThis.crypto = webcrypto;
    }
  } catch (e) {
    // If webcrypto isn't available, leave as-is; Vite will error later.
  }
}
