import type { App, Component, Plugin } from 'vue'

import {
  // === Navigation Icons ===
  CircleGauge,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Menu,
  X,

  // === User & Account Icons ===
  Users,
  User,
  UserCircle,
  UserPlus,

  // === Action Icons ===
  MoveRight,
  Power,
  LogOut,
  LogIn,
  Settings,
  Plus,
  CheckSquare,
  Trash,

  // === Security Icons ===
  ShieldAlert,
  FileLock,
  FileQuestion,
  Lock,
  Unlock,

  // === Content Icons ===
  Home,
  FileText,
  File,
  Folder,
  FolderOpen,
  Printer,

  // === System Icons ===
  Search,
  Bell,
  Mail,
  Calendar,
  Clock,

  // === Status Icons ===
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,

  // === Chart Icons ===
  ChartNoAxesColumn,
} from 'lucide-vue-next'

const ICON_REGISTRY = {
  // Navigation
  CircleGauge,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Menu,
  X,

  // User & Account
  Users,
  User,
  UserCircle,
  UserPlus,

  // Actions
  MoveRight,
  Power,
  LogOut,
  LogIn,
  Settings,
  Plus,
  CheckSquare,
  Trash,

  // Security
  ShieldAlert,
  FileLock,
  FileQuestion,
  Lock,
  Unlock,

  // Content
  Home,
  FileText,
  File,
  Folder,
  FolderOpen,
  Printer,

  // System
  Search,
  Bell,
  Mail,
  Calendar,
  Clock,

  // Status
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,

  // Charts
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

    // Validation: prevent plugin re-installation
    if (app.config.globalProperties.$lucideInstalled) {
      if (devMode) {
        console.warn('[LucidePlugin] Plugin already installed. Skipping re-installation.')
      }
      return
    }

    // Register icons dengan error handling
    let registeredCount = 0
    let failedCount = 0

    Object.entries(ICON_REGISTRY).forEach(([name, component]) => {
      try {
        const componentName = `${prefix}${name}`

        // Validasi component sebelum register
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

    // Development mode logging
    if (devMode) {
      console.info(
        `[LucidePlugin] Registered ${registeredCount} icons` +
          (failedCount > 0 ? ` (${failedCount} failed)` : ''),
      )
    }

    // Mark as installed
    app.config.globalProperties.$lucideInstalled = true

    // Provide icon list untuk debugging
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

    // Fallback ke dummy component untuk prevent crash
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
