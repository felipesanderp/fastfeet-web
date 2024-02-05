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
        <Link to="/" className="mr-1 flex items-center gap-2">
          <Home className="size-4" />
          Home
        </Link>
        {!isHome && <span className="mx-1">{'>'}</span>}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          const customName = breadcrumbs[routeTo]
          const isLast = index === pathnames.length - 1
          return (
            <span key={name}>
              {index > 0 && <span className="mx-1">{'>'}</span>}
              {index >= 1 ? (
                <Link
                  to={routeTo}
                  className={isLast ? 'font-bold' : 'text-blue-200'}
                >
                  {customName || name}
                </Link>
              ) : (
                <span className={isLast ? 'font-bold' : 'text-blue-200'}>
                  {customName || name}
                </span>
              )}
            </span>
          )
        })}
      </div>
    </div>
  )
}
