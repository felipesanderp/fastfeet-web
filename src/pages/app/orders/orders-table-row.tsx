import { MoreHorizontal, Search, Truck } from 'lucide-react'
import { useState } from 'react'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'

export interface OrdersTableRowProps {
  order: {
    orderId: string
    description: string
    recipient: string
    status: 'pending' | 'delivering' | 'delivered'
  }
}

export function OrdersTableRow({ order }: OrdersTableRowProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="size-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails open={isDetailsOpen} orderId={order.orderId} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>
      <TableCell className="truncate max-w-[440px]">
        {order.description}
      </TableCell>
      <TableCell>{order.recipient}</TableCell>
      <TableCell>
        {order.status === 'pending' && (
          <div className="flex items-center gap-2">
            <Icons.packageSearch className="size-4" />
            <p>Pendente</p>
          </div>
        )}

        {order.status === 'delivering' && (
          <div className="flex items-center gap-2">
            <Truck className="size-4" />
            <p>Em entrega</p>
          </div>
        )}

        {order.status === 'delivered' && (
          <div className="flex items-center gap-2">
            <Icons.packageCheck className="size-4" />
            <p>Entregue</p>
          </div>
        )}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            >
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[160px]">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Make a copy</DropdownMenuItem>
            <DropdownMenuItem>Favorite</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}
