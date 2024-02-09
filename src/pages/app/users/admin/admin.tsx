import { Plus, Table } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { DeliverymenTableFilters } from '../deliverymen/deliverymen-table-filters'

export function UsersAdmin() {
  const [searchParams, setSearchParams] = useSearchParams()

  const page = z.coerce.number().parse(searchParams.get('page') ?? '1')

  const perPage = z.coerce.number().parse(searchParams.get('perPage') ?? '10')

  return (
    <>
      <Helmet title="Admins" />
      <div className="flex flex-col gap-12">
        <div className="flex items-center justify-between">
          <h1 className="font-bold font-robotoCondensed text-3xl">
            Entregadores
          </h1>

          <Button variant="link" size="sm">
            <Plus className="size-4 mr-2" />
            Novo entregador
          </Button>
        </div>

        <div className="space-y-2.5">
          <DeliverymenTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[280px]">Identificador</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead className="w-[140px]">CPF</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                </TableRow>
              </TableHeader>
              {/* <TableBody>
                {result &&
                  result.deliverymen.map((deliveryman) => {
                    return (
                      <DeliverymenTableRow
                        key={deliveryman.id}
                        deliveryman={deliveryman}
                      />
                    )
                  })}
              </TableBody> */}
            </Table>
          </div>
          {/* {isLoadingDeliverymen && <DeliverymenTableSkeleton />} */}
        </div>
      </div>
    </>
  )
}
