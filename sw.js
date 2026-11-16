const CACHE_NAME = 'elementaita-programs-v1';
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
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            if (event.request.method === 'GET' && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
        })
      );
    }).catch(() => {
      // Fallback for offline if not in cache
      return caches.match('./index.html');
    })
  );
});
