import { Breadcrumb } from './breadcrumb'
import { ThemeToggle } from './theme/theme-toggle'
import { UserAccountNav } from './user-account-nav'

export function Header() {
  const breadcrumbs = {
    '/': 'Home',
    '/users': 'Usuários',
    '/users/admins': 'Admins',
    '/users/deliverymen': 'Entregadores',
  }

  return (
    <div className="hidden lg:flex items-center justify-between h-16 px-6 bg-white border-b border-zinc-400">
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="flex items-center gap-2">
        <UserAccountNav
          user={{
            image: 'http://github.com/felipesanderp.png',
            name: 'Felipe Sander',
          }}
        />
        <ThemeToggle />
      </div>
    </div>
  )
}
