function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Cek apakah script sudah dimuat sebelumnya
    if (document.querySelector(`script[data-src="${src}"]`)) {
      return resolve()
    }

    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.dataset.src = src
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`))

    document.body.appendChild(script)
  })
}

async function loadScripts(scripts: string[]): Promise<void> {
  for (const script of scripts) {
    await loadScript(script)
  }
}

export async function initMidoneAuth(): Promise<void> {
  const authScripts = [
    '/assets/js/vendors/dom.js',
    '/assets/js/vendors/modal.js',
    '/assets/js/vendors/lucide.js',
    '/assets/js/components/base/page-loader.js',
    '/assets/js/components/base/lucide.js',
    '/assets/js/components/theme-switcher.js',
  ]

  await loadScripts(authScripts)
}

export async function initMidoneDashboard(): Promise<void> {
  const dashboardScripts = [
    '/assets/js/vendors/dom.js',
    '/assets/js/vendors/lucide.js',
    '/assets/js/vendors/popper.js',
    '/assets/js/vendors/dropdown.js',
    '/assets/js/vendors/modal.js',
    '/assets/js/vendors/simplebar.js',
    '/assets/js/vendors/tippy.js',
    '/assets/js/components/base/page-loader.js',
    '/assets/js/components/base/lucide.js',
    '/assets/js/themes/rubick.js',
    '/assets/js/utils/helper.js',
    '/assets/js/components/base/tippy.js',
    '/assets/js/components/theme-switcher.js',
  ]

  await loadScripts(dashboardScripts)
}

export async function initMidone(): Promise<void> {
  await initMidoneAuth()
}
