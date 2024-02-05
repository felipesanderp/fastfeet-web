import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/components/sidebar'

export function AppLayout() {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-app">
      <Sidebar />
      <div className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
        <Outlet />
      </div>
    </div>
  )
}
