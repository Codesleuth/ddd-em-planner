/* eslint-env serviceworker */
/* global workbox:false precacheManifest:false */

// importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

workbox.core.skipWaiting()
workbox.core.clientsClaim()

// Network First
const networkCaches = [
  '/$', // Index
  '/*', // Anything in the same host
  '.+/*' // Anything in any host
]

networkCaches.forEach(mask => {
  workbox.routing.registerRoute(
    new RegExp(mask),
    new workbox.strategies.NetworkFirst({ cacheName: 'dynamic' })
  )
})

workbox.routing.registerRoute(
  /\/.*/,
  new workbox.strategies.NetworkFirst({ cacheName: 'dynamic' })
)

workbox.precaching.precacheAndRoute(precacheManifest)
