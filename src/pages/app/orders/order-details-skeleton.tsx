import { Icons } from '@/components/icons'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetailsSkeleton() {
  return (
    <div className="space-y-6">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="text-muted-foreground">Status</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-5 w-24" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Cliente</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-5 w-24" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Endereço</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-5 w-56" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Cidade</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-5 w-24" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">CEP</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-5 w-20" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mapa de entrega</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Card className="flex h-[200px] w-full items-center justify-center">
                <Icons.loader2 className="size-8 animate-spin text-muted-foreground" />
              </Card>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
