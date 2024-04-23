import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'

import { roles, statuses } from './data/data'
import { User } from './data/schema'
import { UsersTableColumnHeader } from './users-table-column-header'
import { UsersTableRowActions } from './users-table-row-actions'

export const columns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'imageURL',
    header: ({ column }) => <UsersTableColumnHeader column={column} title="" />,
    cell: ({ row }) => {
      return (
        <img
          src={row.getValue('imageURL')}
          alt="User avatar"
          className="aspect-square rounded-md object-cover"
          height={64}
          width={64}
        />
      )
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <UsersTableColumnHeader column={column} title="Nome" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[500px] truncate font-medium">
          {row.getValue('name')}
        </span>
      )
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <UsersTableColumnHeader column={column} title="Status" />
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
    accessorKey: 'role',
    header: ({ column }) => (
      <UsersTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => {
      const role = roles.find((role) => role.value === row.getValue('role'))

      if (!role) {
        return null
      }

      return (
        <div className="flex items-center">
          <span>{role.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <UsersTableRowActions row={row} />,
  },
]
