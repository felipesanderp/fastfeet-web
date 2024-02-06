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
          'group flex items-center h-10 gap-3 rounded px-3 py-1 hover:bg-violet-100 data-[current=true]:bg-violet-100',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
        <span
          data-current={pathname === props.to}
          className="font-medium data-[current=true]:text-primary"
        >
          {title}
        </span>
      </Link>
    )
  },
)
NavLink.displayName = 'NavLink'

export { NavLink }
