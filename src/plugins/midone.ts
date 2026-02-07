export async function initMidone() {
  await loadScript('/assets/js/vendors/dom.js')
  await loadScript('/assets/js/vendors/modal.js')
  await loadScript('/assets/js/vendors/lucide.js')

  await loadScript('/assets/js/components/base/page-loader.js')
  await loadScript('/assets/js/components/base/lucide.js')
  await loadScript('/assets/js/components/theme-switcher.js')
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[data-src="${src}"]`)) return resolve()

    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.dataset.src = src
    s.onload = () => resolve()
    s.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.body.appendChild(s)
  })
}
