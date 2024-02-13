import { Breadcrumb } from './breadcrumb'
import { CommandMenu } from './command-menu'
import { ThemeToggle } from './theme/theme-toggle'
import { UserAccountNav } from './user-account-nav'

export function Header() {
  const breadcrumbs = {
    '/': 'Home',
    '/users': 'Usuários',
    '/users/admins': 'Admins',
    '/users/deliverymen': 'Entregadores',
    '/orders': 'Pedidos',
  }

  return (
    <div className="hidden lg:flex items-center justify-between h-16 text-sm px-6 bg-background border-b">
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <CommandMenu />

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
