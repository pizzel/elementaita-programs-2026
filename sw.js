const CACHE_NAME = 'elementaita-programs-v3';
const STATIC_ASSETS = [
  './',
  './index.html',
  './wyde.html',
  './ewip.html',
  './data.js',
  './assets/css/style.css',
  './assets/js/app.js',
  './assets/images/wyde-header-banner.png',
  './assets/images/ewip-logo.png',
  './assets/images/kic-logo.png',
  './assets/qr/portal-qr.png',
  './assets/qr/portal-qr.svg',
  './assets/qr/wyde-qr.png',
  './assets/qr/wyde-qr.svg',
  './assets/qr/ewip-qr.png',
  './assets/qr/ewip-qr.svg',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Network-first strategy so users always get the freshest updates
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (event.request.method === 'GET' && networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback to cache if offline
        return caches.match(event.request).then((cached) => {
          return cached || caches.match('./index.html');
        });
      })
  );
});
