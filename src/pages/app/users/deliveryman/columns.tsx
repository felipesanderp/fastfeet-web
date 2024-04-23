import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'

import { Deliveryman } from './data/schema'
import { statuses } from './data/statutes'
import { DeliverymanTableColumnHeader } from './deliveryman-table-column-header'
import { DeliverymanTableRowActions } from './deliveryman-table-row-actions'

export const columns: ColumnDef<Deliveryman>[] = [
  {
    accessorKey: 'imageURL',
    header: ({ column }) => (
      <DeliverymanTableColumnHeader column={column} title="" />
    ),
    cell: ({ row }) => (
      <div className="">
        <img
          alt="User avatar"
          className="aspect-square rounded-md object-cover"
          height="64"
          width="64"
          src={row.getValue('imageURL')}
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DeliverymanTableColumnHeader column={column} title="Nome" />
    ),
    cell: ({ row }) => {
      const role = row.original.role

      return (
        <div className="flex space-x-2">
          <span className="max-w-[350px] truncate font-medium">
            {row.getValue('name')}
          </span>
          <Badge variant="outline">{role}</Badge>
        </div>
      )
    },
    enableHiding: false,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DeliverymanTableColumnHeader column={column} title="E-mail" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span>{row.getValue('email')}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DeliverymanTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status'),
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DeliverymanTableRowActions row={row} />,
  },
]
