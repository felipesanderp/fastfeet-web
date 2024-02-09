import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function DeliverymenTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Button disabled variant="outline" size="xs">
            <Search className="h-3 w-3" />
            <span className="sr-only">Detalhes do entregador</span>
          </Button>
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[260px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[800px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[100px]" />
        </TableCell>
      </TableRow>
    )
  })
}
