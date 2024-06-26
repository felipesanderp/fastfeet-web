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

      <div className="flex-1">
        <Header />

        <main className="min-h-screen px-4 pb-12 pt-6 bg-muted/40 dark:bg-muted lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
