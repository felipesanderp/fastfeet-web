import { AccountMenu } from './account-menu'
import { Breadcrumb } from './breadcrumb'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  const breadcrumbs = {
    '/': 'Home',
    '/users': 'Usuários',
    '/users/admins': 'Admins',
    '/users/deliveryman': 'Entregadores',
  }

  return (
    <div className="flex items-center justify-between h-16 px-6 bg-white border-b border-zinc-400">
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="flex items-center gap-2">
        <AccountMenu />
        <ThemeToggle />
      </div>
    </div>
  )
}
