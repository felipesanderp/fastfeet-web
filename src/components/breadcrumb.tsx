import { Link, useLocation } from 'react-router-dom'

export const Breadcrumb = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <div>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
        const isLast = index === pathnames.length - 1
        return (
          <span key={name}>
            <Link
              to={routeTo}
              className={isLast ? 'font-bold' : 'text-blue-200'}
            >
              {name}
            </Link>
            {!isLast && <span className="mx-1">/</span>}
          </span>
        )
      })}
    </div>
  )
}
