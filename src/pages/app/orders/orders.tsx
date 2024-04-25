import { PlusCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

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
  return (
    <>
      <Breadcrumb className="hidden relative -top-20 left-2 md:inline-flex">
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
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
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
                  <OrdersTableRow />
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
