import { Menu, Package2 } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { NavItem } from '@/types/nav-link'

import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

interface MobileNavProps {
  items: NavItem[]
}

export function MobileNav({ items }: MobileNavProps) {
  const { pathname } = useLocation()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </div>
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              data-active={pathname === item.href}
              className="flex items-center gap-2 text-lg transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-bold"
            >
              <item.icon className="size-4" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
