import type { App, Component, Plugin } from 'vue'

import {
  CircleGauge,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Menu,
  X,
  Users,
  User,
  UserCircle,
  UserPlus,
  MoveRight,
  Power,
  LogOut,
  LogIn,
  Settings,
  Plus,
  CheckSquare,
  Trash,
  ShieldAlert,
  FileLock,
  FileQuestion,
  Lock,
  Unlock,
  Home,
  FileText,
  File,
  Folder,
  FolderOpen,
  Printer,
  Search,
  Bell,
  Mail,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  ChartNoAxesColumn,
} from 'lucide-vue-next'

/**
 * Registry terpusat semua icon yang tersedia di aplikasi.
 * Hanya tambahkan icon yang benar-benar digunakan untuk menjaga bundle size.
 * `as const` memastikan type inference bekerja optimal dan registry immutable.
 */
const ICON_REGISTRY = {
  CircleGauge,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Menu,
  X,

  Users,
  User,
  UserCircle,
  UserPlus,

  MoveRight,
  Power,
  LogOut,
  LogIn,
  Settings,
  Plus,
  CheckSquare,
  Trash,

  ShieldAlert,
  FileLock,
  FileQuestion,
  Lock,
  Unlock,

  Home,
  FileText,
  File,
  Folder,
  FolderOpen,
  Printer,

  Search,
  Bell,
  Mail,
  Calendar,
  Clock,

  CheckCircle,
  XCircle,
  AlertCircle,
  Info,

  ChartNoAxesColumn,
} as const

export type AvailableIconName = keyof typeof ICON_REGISTRY

export interface LucidePluginOptions {
  prefix?: string
  devMode?: boolean
}

function isValidVueComponent(value: unknown): value is Component {
  if (typeof value === 'function') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    return (value as Function).prototype === undefined
  }
  if (!value || typeof value !== 'object') return false
  return 'render' in value || 'setup' in value || '__name' in value || 'props' in value
}

export const LucideIconsPlugin: Plugin = {
  install(app: App, options: LucidePluginOptions = {}) {
    const { prefix = '', devMode = import.meta.env.DEV } = options

    if (app.config.globalProperties.$lucideInstalled) {
      if (devMode) {
        console.warn('[LucidePlugin] Plugin sudah terpasang. Instalasi dilewati.')
      }
      return
    }

    let registeredCount = 0
    let failedCount = 0

    for (const [name, component] of Object.entries(ICON_REGISTRY)) {
      if (!isValidVueComponent(component)) {
        failedCount++
        if (devMode) {
          console.error(`[LucidePlugin] "${name}" bukan Vue component yang valid. Dilewati.`)
        }
        continue
      }

      app.component(`${prefix}${name}`, component)
      registeredCount++
    }

    if (devMode) {
      const failedInfo = failedCount > 0 ? ` (${failedCount} gagal)` : ''
      console.info(`[LucidePlugin] ${registeredCount} icon terdaftar${failedInfo}`)
    }

    app.config.globalProperties.$lucideInstalled = true

    // SECURITY: daftar icon tidak diekspos via provide.
    // Komponen child tidak butuh akses langsung ke registry.
  },
}

/**
 * Ambil icon dari registry berdasarkan nama dengan type safety penuh.
 *
 * Jika icon tidak ditemukan (nama salah / belum didaftarkan):
 * - DEV: log error ke console dengan nama yang dicari
 * - Production: diam — tidak ada detail internal yang terekspos
 * - Fallback ke `X` agar terlihat jelas ada yang salah, bukan diam-diam
 *   render icon yang menyesatkan seperti CircleGauge (dashboard icon)
 */
export function useLucideIcon(name: AvailableIconName): Component {
  const icon = ICON_REGISTRY[name]

  if (!isValidVueComponent(icon)) {
    if (import.meta.env.DEV) {
      console.error(`[useLucideIcon] Icon "${name}" tidak ditemukan atau tidak valid di registry.`)
    }
    return X as Component
  }

  return icon as Component
}

export function getAvailableIcons(): readonly AvailableIconName[] {
  return Object.keys(ICON_REGISTRY) as AvailableIconName[]
}

export default LucideIconsPlugin

declare module 'vue' {
  interface ComponentCustomProperties {
    $lucideInstalled?: boolean
  }
}
