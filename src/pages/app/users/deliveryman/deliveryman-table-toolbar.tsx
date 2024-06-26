import { Table } from '@tanstack/react-table'
import { File, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { exportTableToCSV } from '@/lib/export'

import { type Deliveryman } from './data/schema'
import { statuses } from './data/statutes'
import { DeliverymanTableFacetedFilter } from './deliveryman-table-faceted-filter'
import { DeliverymanTableViewOptions } from './deliveryman-table-view-options'

interface DataTableToolbarProps {
  table: Table<Deliveryman>
}

export function DataTableToolbar({ table }: DataTableToolbarProps) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filtre entregadores..."
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('name')?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn('status') && (
          <DeliverymanTableFacetedFilter
            column={table.getColumn('status')}
            title="Status"
            options={statuses}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <Button
        size="sm"
        variant="outline"
        className="h-8 gap-1"
        onClick={() =>
          exportTableToCSV(table, {
            filename: 'deliverymen',
            excludeColumns: ['imageURL', 'actions'],
          })
        }
      >
        <File className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Export
        </span>
      </Button>
      <DeliverymanTableViewOptions table={table} />
    </div>
  )
}
