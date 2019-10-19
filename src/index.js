import initApp from './app'

let serviceWorkerRegistration // eslint-disable-line no-unused-vars

async function registerServiceWorker () {
  const r = await navigator.serviceWorker.register('./service_worker.js')
  serviceWorkerRegistration = r
}

function windowLoadHandler () {
  registerServiceWorker().then(
    () => console.log('Service worker registered successfully'),
    (err) => console.error('Service worker registration error', err)
  )
}

function installServiceWorker () {
  if (!('serviceWorker' in navigator)) return
  window.addEventListener('load', windowLoadHandler)
}

installServiceWorker()
initApp()
