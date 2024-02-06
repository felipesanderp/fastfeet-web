import * as React from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'

export interface NavLinkProps extends LinkProps {
  title: string
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ title, className, children, ...props }, ref) => {
    const { pathname } = useLocation()
    return (
      <Link
        data-current={pathname === props.to}
        className={cn(
          'group flex items-center h-10 gap-3 rounded px-2 py-2 hover:bg-accent data-[current=true]:bg-primary data-[current=true]:text-primary-foreground',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
        <span className="font-medium data-[current=true]:text-primary">
          {title}
        </span>
      </Link>
    )
  },
)
NavLink.displayName = 'NavLink'

export { NavLink }
