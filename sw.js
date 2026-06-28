const CACHE_NAME = 'verificador-juani-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// Instalar el Service Worker y guardar los archivos básicos en memoria
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Hacer que la app responda rápido usando la memoria interna
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
