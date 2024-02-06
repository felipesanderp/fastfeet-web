import * as Collapsible from '@radix-ui/react-collapsible'
import { Menu } from 'lucide-react'

import { Logo } from './logo'
import { Nav } from './nav'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col px-2 gap-6 border-b border-zinc-400 data-[state=open]:bottom-0 bg-muted dark:bg-background lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between h-16 lg:justify-center">
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

        <Nav />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
