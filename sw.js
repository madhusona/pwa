/** An empty service worker! */
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('your-magic-cache').then(function(cache) {
        return cache.addAll([
          './',
          './index.html',
          './companies.html',
          './manifest.json',
          './site.js',
          ]);
      })
    );
  });
  
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    }).catch(err => console.log('Error while fetching assets', err))
  );
});





