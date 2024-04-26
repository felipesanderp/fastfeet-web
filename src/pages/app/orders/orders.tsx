import { useQuery } from '@tanstack/react-query'
import { PlusCircle } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getOrders } from '@/api/get-orders'
import { Pagination } from '@/components/pagination'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Table, TableBody, TableHead, TableHeader } from '@/components/ui/table'

import { OrdersTableFilters } from './orders-table-filters'
import { OrdersTableRow } from './orders-table-row'

export function Orders() {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId')
  const recipient = searchParams.get('recipient')
  const status = searchParams.get('status')

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')
  const perPage = z.coerce.number().parse(searchParams.get('perPage') ?? '10')

  const { data: result, isLoading: isLoadingOrders } = useQuery({
    queryKey: ['orders', pageIndex, perPage, orderId, recipient, status],
    queryFn: () =>
      getOrders({
        pageIndex,
        perPage,
        orderId,
        recipient,
        status: status === 'all' ? null : status,
      }),
  })

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())

      return state
    })
  }

  function handlePerPageChange(perPageNew: number) {
    setSearchParams((state) => {
      state.set('perPage', perPageNew.toString())

      return state
    })
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <Breadcrumb className="hidden left-2 md:inline-flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Pedidos</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto flex items-center gap-2">
            <Button size="sm" className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Product
              </span>
            </Button>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Pedidos</CardTitle>
            <CardDescription>Gerencie os pedidos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <OrdersTableFilters />

            <div className="rounded-md border bg-muted/40">
              <Table>
                <TableHeader>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[285px]">Identificador</TableHead>
                  <TableHead className="w-[440px]">Descrição</TableHead>
                  <TableHead className="w-[220px]">Destinatário</TableHead>
                  <TableHead className="w-[200px]">Status</TableHead>
                  <TableHead className="w-[120px]"></TableHead>
                </TableHeader>
                <TableBody>
                  {result &&
                    result.orders.map((order) => {
                      return (
                        <OrdersTableRow key={order.orderId} order={order} />
                      )
                    })}
                </TableBody>
              </Table>
            </div>
            {isLoadingOrders && <span>Carregando...</span>}

            {result && (
              <Pagination
                onPageChange={handlePaginate}
                onPerPageChange={handlePerPageChange}
                pageIndex={result.meta.pageIndex}
                totalCount={result.meta.totalCount}
                perPage={result.meta.perPage}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </>
  )
}
