import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrdersTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Button disabled variant="outline" size="xs">
            <Search className="h-3 w-3" />
            <span className="sr-only">Detalhes do pedido</span>
          </Button>
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[285px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[440px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w[240px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[210px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[200px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[90px]" />
        </TableCell>
      </TableRow>
    )
  })
}
