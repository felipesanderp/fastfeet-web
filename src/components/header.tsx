import { Breadcrumb } from './breadcrumb'

export function Header() {
  const breadcrumbs = {
    '/': 'Home',
    '/users': 'Usuários',
    '/users/admins': 'Admins',
    '/users/deliveryman': 'Entregadores',
  }

  return (
    <div className="flex h-16 bg-white border-b border-zinc-400">
      <div>
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>
    </div>
  )
}
