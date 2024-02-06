import * as Collapsible from '@radix-ui/react-collapsible'
import * as React from 'react'

import { Icons } from './icons'
import { NavLink } from './nav-link'
import { Button } from './ui/button'

export function Nav() {
  const [open, setOpen] = React.useState(false)

  return (
    <nav className="space-y-0.5">
      <NavLink to="/" title="Início">
        <Icons.home className="size-4" />
      </NavLink>
      <Collapsible.Root
        className="w-full space-y-0.5"
        open={open}
        onOpenChange={setOpen}
      >
        <Collapsible.Trigger asChild>
          <Button
            variant="ghost"
            className="justify-between w-full px-2 py-2 text-md"
          >
            <div className="flex items-center gap-3">
              <Icons.user className="size-4" />
              Usuários
            </div>
            {open ? (
              <Icons.chevronDown className="size-4" />
            ) : (
              <Icons.chevronRight className="size-4" />
            )}
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content className="px-5 space-y-0.5">
          <NavLink to="/users/admins" title="Admins"></NavLink>
          <NavLink to="/users/deliverymen" title="Entregadores"></NavLink>
          <NavLink to="/users/recipients" title="Destinatários"></NavLink>
        </Collapsible.Content>
      </Collapsible.Root>
    </nav>
  )
}
