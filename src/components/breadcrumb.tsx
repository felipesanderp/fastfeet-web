import { Home } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface Breadcrumbs {
  [key: string]: string
}

interface BreadcrumbProps {
  breadcrumbs: Breadcrumbs
}

export const Breadcrumb = ({ breadcrumbs }: BreadcrumbProps) => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)
  const isHome = location.pathname === '/'

  return (
    <div className="">
      <div className="flex">
        <Link
          data-current={location.pathname === '/'}
          to="/"
          className="mr-1 flex items-center gap-2 text-muted-foreground data-[current=true]:text-violet-500 data-[current=true]:font-semibold"
        >
          <Home className="size-4" />
          Home
        </Link>
        {!isHome && <span className="mx-1">{'>'}</span>}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          const customName = breadcrumbs[routeTo]
          const isLast = index === pathnames.length - 1
          console.log(isLast)
          return (
            <span key={name}>
              {index > 0 && <span className="mx-1">{'>'}</span>}
              <span
                className={
                  isLast
                    ? 'text-violet-500 font-semibold'
                    : 'text-muted-foreground'
                }
              >
                {customName || name}
              </span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
