import { useLucideIcon } from '@/plugins/lucide.plugins'

export function useMenuIcons() {
  return {
    dashboard: useLucideIcon('CircleGauge'),
    chevronDown: useLucideIcon('ChevronDown'),
    chevronUp: useLucideIcon('ChevronUp'),
    chevronRight: useLucideIcon('ChevronRight'),
    chevronLeft: useLucideIcon('ChevronLeft'),
    menu: useLucideIcon('Menu'),
    closeIcons: useLucideIcon('X'),

    users: useLucideIcon('Users'),
    user: useLucideIcon('User'),

    moveRight: useLucideIcon('MoveRight'),
    power: useLucideIcon('Power'),
    settings: useLucideIcon('Settings'),
    logout: useLucideIcon('LogOut'),
    plus: useLucideIcon('Plus'),
    checkSquare: useLucideIcon('CheckSquare'),
    trash: useLucideIcon('Trash'),

    shieldAlert: useLucideIcon('ShieldAlert'),
    fileLock: useLucideIcon('FileLock'),
    fileQuestion: useLucideIcon('FileQuestion'),
    lock: useLucideIcon('Lock'),

    home: useLucideIcon('Home'),
    file: useLucideIcon('FileText'),
    printer: useLucideIcon('Printer'),

    search: useLucideIcon('Search'),
    bell: useLucideIcon('Bell'),

    chartColumn: useLucideIcon('ChartNoAxesColumn'),
  }
}
