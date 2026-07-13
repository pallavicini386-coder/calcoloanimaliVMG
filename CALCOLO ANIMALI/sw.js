const CACHE_NAME = 'tezza-calc-v3';
const URLS_TO_CACHE = ['/', '/index.html', '/manifest.json', '/icon192.png', '/icon512.png', '/iconmaskable512.png', '/splash750x1334.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE).catch(() => cache.addAll(['/', '/index.html', '/manifest.json']))));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(names => Promise.all(names.map(n => n !== CACHE_NAME && caches.delete(n)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).then(r => { if(r.ok){const c=r.clone();caches.open(CACHE_NAME).then(ca=>ca.put(event.request,c));} return r; }).catch(() => caches.match(event.request).then(r => r || (event.request.mode==='navigate'?caches.match('/index.html'):new Response('Offline',{status:503})))));
});
