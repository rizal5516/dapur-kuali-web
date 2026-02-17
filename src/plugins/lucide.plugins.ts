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

export const LucideIconsPlugin: Plugin = {
  install(app: App, options: LucidePluginOptions = {}) {
    const { prefix = '', devMode = import.meta.env.DEV } = options

    if (app.config.globalProperties.$lucideInstalled) {
      if (devMode) {
        console.warn('[LucidePlugin] Plugin already installed. Skipping re-installation.')
      }
      return
    }

    let registeredCount = 0
    let failedCount = 0

    Object.entries(ICON_REGISTRY).forEach(([name, component]) => {
      try {
        const componentName = `${prefix}${name}`

        if (!component || typeof component !== 'object') {
          throw new Error(`Invalid component: ${name}`)
        }

        app.component(componentName, component as Component)
        registeredCount++
      } catch (error) {
        failedCount++

        if (devMode) {
          console.error(`[LucidePlugin] Failed to register icon: ${name}`, error)
        }
      }
    })

    if (devMode) {
      console.info(
        `[LucidePlugin] Registered ${registeredCount} icons` +
          (failedCount > 0 ? ` (${failedCount} failed)` : ''),
      )
    }

    app.config.globalProperties.$lucideInstalled = true

    if (devMode) {
      app.provide('lucideIcons', Object.keys(ICON_REGISTRY))
    }
  },
}

export function useLucideIcon(name: AvailableIconName): Component {
  const icon = ICON_REGISTRY[name]

  if (!icon) {
    if (import.meta.env.DEV) {
      console.error(
        `[useLucideIcon] Icon "${name}" not found in registry.` +
          ` Available icons: ${Object.keys(ICON_REGISTRY).join(', ')}`,
      )
    }

    return CircleGauge
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
