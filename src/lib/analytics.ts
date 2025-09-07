// src/lib/analytics.ts
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function injectGAScript(id: string) {
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(s)
}

export function initGA(id?: string) {
  if (!id) return
  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: unknown[]) => window.dataLayer.push(args)
  window.gtag('js', new Date())

  window.gtag('config', id, { send_page_view: false })
}

export function pageview(path: string) {
  if (!window.gtag) return
  window.gtag('event', 'page_view', {
    page_location: window.location.origin + path,
    page_path: path,
  })
}

export function gaEvent(name: string, params?: Record<string, unknown>) {
  if (!window.gtag) return
  window.gtag('event', name, params)
}
