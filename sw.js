/* ═══════════════════════════════════════════════════════════
   YOURDIS SERVICE WORKER — v1.0
   Strategy:
     • App shell (HTML, JS, CSS, fonts) → Cache-first, network-update
     • Product images (jpeg*.jpg)       → Cache-first, stale-while-revalidate
     • External fonts (Google Fonts)    → Cache-first, long TTL
     • Everything else                  → Network-first with cache fallback
   Auto-update: new SW activates immediately and notifies the page
═══════════════════════════════════════════════════════════ */

const CACHE_VERSION = 'yourdis-v1';
const STATIC_CACHE  = CACHE_VERSION + '-static';
const IMAGE_CACHE   = CACHE_VERSION + '-images';
const FONT_CACHE    = CACHE_VERSION + '-fonts';

/* Files that form the complete app shell */
const APP_SHELL = [
  './index.html',
  './yourdis-data.js',
  './manifest.json'
];

/* Image assets to pre-cache */
const PRODUCT_IMAGES = [
  './jpeg1.jpg',
  './jpeg2.jpg',
  './jpeg3.jpg',
  './jpeg4.jpg',
  './jpeg5.jpg',
  './jpeg6.jpg'
];

/* All icon sizes — cache on install */
const ICON_ASSETS = [
  './icons/icon-72.png',
  './icons/icon-96.png',
  './icons/icon-128.png',
  './icons/icon-144.png',
  './icons/icon-152.png',
  './icons/icon-192.png',
  './icons/icon-384.png',
  './icons/icon-512.png'
];

/* ── INSTALL: cache all static assets ──────────────────── */
self.addEventListener('install', function(event) {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(function(cache) {
        return cache.addAll(APP_SHELL).catch(function(err) {
          /* Non-fatal: app still works, just not fully offline yet */
          console.warn('[SW] Failed to cache some shell assets:', err);
        });
      }),
      caches.open(IMAGE_CACHE).then(function(cache) {
        return cache.addAll(PRODUCT_IMAGES.concat(ICON_ASSETS)).catch(function(err) {
          console.warn('[SW] Failed to cache some images:', err);
        });
      })
    ]).then(function() {
      /* Skip waiting so new SW activates immediately */
      return self.skipWaiting();
    })
  );
});

/* ── ACTIVATE: delete old caches, claim clients ─────────── */
self.addEventListener('activate', function(event) {
  var currentCaches = [STATIC_CACHE, IMAGE_CACHE, FONT_CACHE];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(name) {
            /* Delete any cache not in the current version list */
            return name.startsWith('yourdis-') && !currentCaches.includes(name);
          })
          .map(function(name) {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(function() {
      /* Take control of all open tabs immediately */
      return self.clients.claim();
    }).then(function() {
      /* Notify all open tabs that a new version is active */
      return self.clients.matchAll({ type: 'window' }).then(function(clients) {
        clients.forEach(function(client) {
          client.postMessage({ type: 'SW_UPDATED', version: CACHE_VERSION });
        });
      });
    })
  );
});

/* ── FETCH: route requests to the right strategy ─────────── */
self.addEventListener('fetch', function(event) {
  var url = event.request.url;
  var req = event.request;

  /* Only handle GET requests */
  if (req.method !== 'GET') return;

  /* Skip non-http(s) requests (chrome-extension:// etc.) */
  if (!url.startsWith('http')) return;

  /* Google Fonts: cache-first, very long TTL */
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    event.respondWith(cacheFirst(req, FONT_CACHE));
    return;
  }

  /* Product images: cache-first, stale-while-revalidate */
  if (url.match(/jpeg\d+\.jpg$/i) || url.includes('/icons/')) {
    event.respondWith(cacheFirst(req, IMAGE_CACHE));
    return;
  }

  /* App shell (index.html, yourdis-data.js, manifest): network-first, fallback cache */
  if (
    url.endsWith('index.html') ||
    url.endsWith('yourdis-data.js') ||
    url.endsWith('manifest.json') ||
    url.endsWith('sw.js')
  ) {
    event.respondWith(networkFirst(req, STATIC_CACHE));
    return;
  }

  /* Everything else: network-first with cache fallback */
  event.respondWith(networkFirst(req, STATIC_CACHE));
});

/* ── STRATEGIES ─────────────────────────────────────────── */

/**
 * Cache-first: serve from cache, update cache in background.
 * Best for images and fonts that rarely change.
 */
function cacheFirst(request, cacheName) {
  return caches.open(cacheName).then(function(cache) {
    return cache.match(request).then(function(cached) {
      var networkFetch = fetch(request).then(function(response) {
        if (response && response.status === 200) {
          cache.put(request, response.clone());
        }
        return response;
      }).catch(function() { return null; });

      return cached || networkFetch;
    });
  });
}

/**
 * Network-first: try network, fall back to cache.
 * Best for HTML and JS files that update with new deployments.
 */
function networkFirst(request, cacheName) {
  return caches.open(cacheName).then(function(cache) {
    return fetch(request).then(function(response) {
      if (response && response.status === 200) {
        cache.put(request, response.clone());
      }
      return response;
    }).catch(function() {
      return cache.match(request).then(function(cached) {
        if (cached) return cached;
        /* Return offline fallback page for navigation requests */
        if (request.mode === 'navigate') {
          return cache.match('./index.html');
        }
        return new Response('Offline', { status: 503 });
      });
    });
  });
}

/* ── MESSAGE HANDLER ─────────────────────────────────────── */
self.addEventListener('message', function(event) {
  if (!event.data) return;

  switch (event.data.type) {
    /* Page explicitly asks SW to skip waiting and activate */
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;

    /* Page asks for current cache version */
    case 'GET_VERSION':
      event.ports[0].postMessage({ version: CACHE_VERSION });
      break;
  }
});
