import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function DeliverymenTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros</span>
      <Input placeholder="ID do entregador" className="h-8 w-auto" />
      <Input placeholder="Nome do entregador" className="h-8 w-[320px]" />

      <Button variant="default" size="xs">
        <Search className="size-4 mr-2" />
        Filtrar resultados
      </Button>
      <Button variant="outline" type="button" size="xs">
        <X className="mr-2 size-4" />
        Remover filtros
      </Button>
    </form>
  )
}
