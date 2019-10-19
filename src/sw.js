/* eslint-env serviceworker */
/* global workbox:false */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

workbox.core.skipWaiting()
workbox.core.clientsClaim()

workbox.routing.registerRoute(
  /\/.*/,
  new workbox.strategies.StaleWhileRevalidate()
)

workbox.precaching.precacheAndRoute([])
