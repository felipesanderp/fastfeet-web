import { Link, useLocation } from 'react-router-dom'

import { buttonVariants } from '@/components/ui/button'
import { useSidebar } from '@/hooks/useSidebar'
import { cn } from '@/lib/utils'
import { NavItem } from '@/types/nav-link'

interface NavItemsProps {
  items: NavItem[]
}

export function NavItems({ items }: NavItemsProps) {
  const { isOpen } = useSidebar()

  const { pathname } = useLocation()

  return (
    <nav className="space-y-4 p-2">
      {items.map((item) => (
        <Link
          key={item.title}
          to={item.href}
          data-active={pathname === item.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'group relative flex px-5 justify-start data-[active=true]:text-purple-500 data-[active=true]:font-bold data-[active=true]:bg-muted',
          )}
        >
          <item.icon className={cn('size-5', item.color)} />
          <span
            className={cn(
              'absolute left-14 text-lg md:text-sm',
              !isOpen &&
                'text-background opacity-0 transition-all group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100',
            )}
          >
            {item.title}
          </span>
        </Link>
      ))}
    </nav>
  )
}
