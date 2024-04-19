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
    <div className="flex">
      <Sidebar />

      <main className="min-h-screen flex-1 px-4 pb-12 pt-24 lg:col-start-2 bg-muted/40 lg:px-8 lg:pt-10">
        <Outlet />
      </main>
    </div>
  )
}
