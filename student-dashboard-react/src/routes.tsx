import { ReactNode } from 'react'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import Courses from './pages/Courses'
import Programs from './pages/Programs'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'

export interface RouteConfig {
  path: string
  element: ReactNode
  label: string
  icon?: string
}

export const routes: RouteConfig[] = [
  { path: '/', element: <Dashboard />, label: 'Dashboard' },
  { path: '/students', element: <Students />, label: 'Students' },
  { path: '/courses', element: <Courses />, label: 'Courses' },
  { path: '/programs', element: <Programs />, label: 'Programs' },
  { path: '/analytics', element: <Analytics />, label: 'Analytics' },
  { path: '/settings', element: <Settings />, label: 'Settings' },
]
