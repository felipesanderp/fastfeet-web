import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

export function AppLayout() {
  // const navigate = useNavigate()

  // const cookie = Cookies.get('fastfeet:token')

  // useEffect(() => {
  //   if (cookie === undefined) {
  //     navigate('/sign-in', { replace: true })
  //   }
  // }, [cookie, navigate])

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-app">
      <Sidebar />

      <div className="lg:col-start-2">
        <Header />
        <main className="px-4 pb-12 pt-24  lg:px-8 lg:pt-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
