const cacheName = 'sam-board-cache-v2';
const toCache = [
    '/',
    'index.html',
    'favicon.ico',
    'logo152.png',
    'logo512.png'
];

self.addEventListener('install', e => {
    console.log('install', e);
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(toCache);
        })
    );
});

self.addEventListener('activate', e => {
    console.log('activate', e);
});

self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(cachedResponse => cachedResponse || fetch(e.request)));
});
