import { Routes, Route, Navigate } from 'react-router-dom'
import LayoutShell from './components/LayoutShell'
import { routes } from './routes'
import './index.css'

export default function App() {
  return (
    <LayoutShell>
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LayoutShell>
  )
}