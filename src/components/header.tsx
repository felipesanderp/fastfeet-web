import { Search } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import { AdminItems } from './constants/nav-items'
import { MobileNav } from './mobile-nav'
import { Input } from './ui/input'
import { UserAccountNav } from './user-account-nav'

export function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="sticky top-0 z-30 flex items-center gap-4 h-14 border-b bg-background px-4 md:static md:bg-muted/40 md:border-0 md:px-8">
      <MobileNav items={AdminItems} />

      {isHome ? (
        ''
      ) : (
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>Pedidos</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
      )}

      <div className="relative flex-1 ml-auto md:grow-0">
        <Search className="absolute size-4 left-2.5 top-2.5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <UserAccountNav
        user={{
          image: 'http://github.com/felipesanderp.png',
          name: 'Felipe Sander',
        }}
      />
    </header>
  )
}
