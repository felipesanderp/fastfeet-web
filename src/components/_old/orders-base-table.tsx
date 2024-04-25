import { ElementType } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Table, TableBody, TableHead, TableHeader } from '@/components/ui/table'

interface OrdersBaseTableProps {
  title: string
  description: string
  tableRow: ElementType
}

export function OrdersBaseTable({
  title,
  description,
  tableRow: TableRow,
}: OrdersBaseTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
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
              <TableRow />
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
