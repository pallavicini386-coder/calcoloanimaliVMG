// Service Worker per Calcolo Animali Tezza
const CACHE_NAME = 'tezza-calc-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon192.png',
  '/icon512.png',
  '/iconmaskable512.png',
  '/splash750x1334.png'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE).catch(err => {
        console.log('Cache addAll error:', err);
        // Non fallire se alcuni asset non sono disponibili
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json'
        ]);
      });
    })
  );
  self.skipWaiting();
});

// Activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch
self.addEventListener('fetch', event => {
  // Solo GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Estrategia: Network first, fallback su cache
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache response anche quando online (per aggiornamenti)
        if (response.ok) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Offline - usa cache
        return caches.match(event.request)
          .then(response => {
            if (response) {
              return response;
            }
            // Fallback per pagine HTML
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            return new Response('Offline', { status: 503 });
          });
      })
  );
});
