import { initMidoneDashboard } from '../plugins/midone'

let dashboardLoaded = false

export function useMidone() {
  const loadDashboardScripts = async (): Promise<void> => {
    if (dashboardLoaded) return

    try {
      await initMidoneDashboard()
      dashboardLoaded = true
    } catch (error) {
      console.error('Failed to load dashboard scripts:', error)
      throw error
    }
  }

  return {
    loadDashboardScripts
  }
}
