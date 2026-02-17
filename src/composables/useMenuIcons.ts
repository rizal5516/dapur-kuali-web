import { shallowReactive } from 'vue'
import { useLucideIcon } from '@/plugins/lucide.plugins'

const iconMap = shallowReactive({
  // Navigasi & Layout
  dashboard: useLucideIcon('CircleGauge'),
  chevronDown: useLucideIcon('ChevronDown'),
  chevronUp: useLucideIcon('ChevronUp'),
  chevronRight: useLucideIcon('ChevronRight'),
  chevronLeft: useLucideIcon('ChevronLeft'),
  menu: useLucideIcon('Menu'),
  closeIcon: useLucideIcon('X'), // singular — konsisten dengan konvensi lain

  // User
  users: useLucideIcon('Users'),
  user: useLucideIcon('User'),
  userCircle: useLucideIcon('UserCircle'),

  // Aksi Umum
  moveRight: useLucideIcon('MoveRight'),
  power: useLucideIcon('Power'),
  settings: useLucideIcon('Settings'),
  logout: useLucideIcon('LogOut'),
  plus: useLucideIcon('Plus'),
  checkSquare: useLucideIcon('CheckSquare'),
  trash: useLucideIcon('Trash'),

  // Keamanan & Akses
  shieldAlert: useLucideIcon('ShieldAlert'),
  fileLock: useLucideIcon('FileLock'),
  fileQuestion: useLucideIcon('FileQuestion'),
  lock: useLucideIcon('Lock'),

  // File & Dokumen
  home: useLucideIcon('Home'),
  file: useLucideIcon('FileText'),
  printer: useLucideIcon('Printer'),

  // Notifikasi & Pencarian
  search: useLucideIcon('Search'),
  bell: useLucideIcon('Bell'),

  // Grafik
  chartColumn: useLucideIcon('ChartNoAxesColumn'),
})

export function useMenuIcons() {
  return iconMap
}

export const decorativeIconAttrs = {
  'aria-hidden': 'true',
  focusable: 'false',
} as const

export const semanticIconAttrs = {
  role: 'img',
  focusable: 'false',
} as const
