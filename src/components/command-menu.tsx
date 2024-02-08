import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Icons } from './icons'
import { Button } from './ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="relative w-60 justify-start h-8 rounded-[0.5rem]"
          onClick={() => setOpen(true)}
        >
          <span className="hidden lg:inline-flex">Search...</span>
          <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <Command>
          <CommandInput placeholder="Type a command or search..." />

          <CommandList>
            <CommandEmpty>No results found...</CommandEmpty>
            <CommandGroup heading="Links">
              <CommandItem
                value="inicio"
                onSelect={() => {
                  runCommand(() => navigate('/'))
                }}
              >
                <Icons.home className="mr-2 size-4" />
                Inicio
              </CommandItem>

              <CommandItem
                value="users/admins"
                onSelect={() => {
                  runCommand(() => navigate('/users/admins'))
                }}
              >
                <Icons.user className="mr-2 size-4" />
                Admins
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
