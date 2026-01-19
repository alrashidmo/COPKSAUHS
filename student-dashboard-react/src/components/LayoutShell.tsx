import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'

interface LayoutShellProps {
  children: ReactNode
}

export default function LayoutShell({ children }: LayoutShellProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Clinical Affairs</h1>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-gray-900 text-white">
          <nav className="p-4 space-y-2">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
