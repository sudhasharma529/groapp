// Minimal service worker — just enough to satisfy PWA installability requirements.
// No offline caching yet; this simply passes requests straight through.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
