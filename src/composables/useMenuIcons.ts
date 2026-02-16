import { useLucideIcon } from '@/plugins/lucide'

export function useMenuIcons() {
  return {
    // Navigation
    dashboard: useLucideIcon('CircleGauge'),
    chevronDown: useLucideIcon('ChevronDown'),
    chevronUp: useLucideIcon('ChevronUp'),
    chevronRight: useLucideIcon('ChevronRight'),
    chevronLeft: useLucideIcon('ChevronLeft'),
    menu: useLucideIcon('Menu'),
    closeIcons: useLucideIcon('X'),

    // User & Account
    users: useLucideIcon('Users'),
    user: useLucideIcon('User'),

    // Actions
    moveRight: useLucideIcon('MoveRight'),
    power: useLucideIcon('Power'),
    settings: useLucideIcon('Settings'),
    logout: useLucideIcon('LogOut'),
    plus: useLucideIcon('Plus'),
    checkSquare: useLucideIcon('CheckSquare'),
    trash: useLucideIcon('Trash'),

    // Security
    shieldAlert: useLucideIcon('ShieldAlert'),
    fileLock: useLucideIcon('FileLock'),
    fileQuestion: useLucideIcon('FileQuestion'),
    lock: useLucideIcon('Lock'),

    // Content
    home: useLucideIcon('Home'),
    file: useLucideIcon('FileText'),
    printer: useLucideIcon('Printer'),

    // System
    search: useLucideIcon('Search'),

    // Charts
    chartColumn: useLucideIcon('ChartNoAxesColumn'),
  }
}
