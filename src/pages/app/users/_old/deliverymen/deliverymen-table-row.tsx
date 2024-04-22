import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export interface DeliverymenTableRowProps {
  deliveryman: {
    id: string
    name: string
    cpf: string
  }
}

export function DeliverymenTableRow({ deliveryman }: DeliverymenTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline">
          <Search className="size-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {deliveryman.id}
      </TableCell>
      <TableCell className="font-medium">{deliveryman.name}</TableCell>
      <TableCell className="font-medium">{deliveryman.cpf}</TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 size-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
