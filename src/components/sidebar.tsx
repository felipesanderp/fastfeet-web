import * as Collapsible from '@radix-ui/react-collapsible'
import { Menu } from 'lucide-react'
import React from 'react'

import { Icons } from './icons'
import { Logo } from './logo'
import { NavLink } from './nav-link'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function Sidebar() {
  const [open, setOpen] = React.useState(false)

  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-400 data-[state=open]:bottom-0 bg-white dark:bg-background lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="size-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input />

        <nav className="space-y-2">
          <NavLink to="/" title="Início">
            <Icons.home className="size-5" />
          </NavLink>
          <Collapsible.Root
            className="w-full space-y-2"
            open={open}
            onOpenChange={setOpen}
          >
            <Collapsible.Trigger asChild>
              <Button
                variant="ghost"
                className="justify-between w-full px-3 py-2 text-md"
              >
                <div className="flex items-center gap-3">
                  <Icons.user className="size-5" />
                  Usuários
                </div>
                {open ? (
                  <Icons.chevronDown className="size-4" />
                ) : (
                  <Icons.chevronRight className="size-4" />
                )}
              </Button>
            </Collapsible.Trigger>
            <Collapsible.Content className="px-3 space-y-2">
              <NavLink to="/users/admins" title="Admins" className="text-sm">
                <Icons.LockWithKey className="size-4" />
              </NavLink>
              <NavLink
                to="/users/deliverymen"
                title="Entregadores"
                className="text-sm"
              >
                <Icons.package className="size-4" />
              </NavLink>
            </Collapsible.Content>
          </Collapsible.Root>
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
