import * as Collapsible from '@radix-ui/react-collapsible'

import { Logo } from './logo'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex-col gap-6 border-b border-foreground data-[state=open]:bottom-0 bg-white dark:bg-background lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
      </div>
    </Collapsible.Root>
  )
}
