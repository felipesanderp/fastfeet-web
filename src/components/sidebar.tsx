import { Triangle } from 'lucide-react'

import { AdminItems } from '@/components/constants/nav-items'
import { buttonVariants } from '@/components/ui/button'
import { useSidebar } from '@/hooks/useSidebar'
import { cn } from '@/lib/utils'

import { NavItems } from './nav-items'

export function Sidebar() {
  const { isOpen, toggle } = useSidebar()

  const handleToggle = () => {
    toggle()
  }

  return (
    // <aside className="hidden inset-y fixed left-0 z-20 md:flex h-full flex-col border-r">
    <aside
      className={cn(
        `relative hidden min-h-screen border-r duration-500 md:block`,
        isOpen ? 'w-[290px]' : 'w-[77px]',
      )}
    >
      <div
        className="group p-2 h-[57px] border-b cursor-pointer"
        onClick={handleToggle}
      >
        <div
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'relative h-10 px-5 justify-start',
            isOpen ? 'flex' : '',
          )}
        >
          <Triangle className={cn('size-5 fill-foreground')} />
          <span
            className={cn(
              'absolute left-14 text-base duration-500',
              !isOpen &&
                'text-background opacity-0 transition-all duration-300',
            )}
          >
            Brand
          </span>
        </div>
      </div>
      <div className="mt-3">
        <NavItems items={AdminItems} />
      </div>
    </aside>
  )
}
