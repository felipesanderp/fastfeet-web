import { useQuery } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Map, Marker, ZoomControl } from 'pigeon-maps'
import { osm } from 'pigeon-maps/providers'
import { useState } from 'react'

import { getOrderDetails } from '@/api/get-order-details'
import { Icons } from '@/components/icons'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrderDetailsSkeleton } from './order-details-skeleton'

export interface OrderDetailsProps {
  orderId: string
  open: boolean
}

export function OrderDetails({ orderId, open }: OrderDetailsProps) {
  const [openDeliveredImage, setOpenDeliveredImage] = useState(false)

  const { data: order } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: open,
  })

  function handleSelectOrders() {
    setOpenDeliveredImage(true)
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: {orderId}</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      {order ? (
        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  {order.postedAt !== null && order.withdrawnAt === null && (
                    <div className="flex items-center gap-2">
                      <Icons.packageSearch className="size-4" />
                      <p>Pendente</p>
                    </div>
                  )}

                  {order.withdrawnAt !== null && order.deliveredAt === null && (
                    <div className="flex items-center gap-2">
                      <Icons.truck className="size-4" />
                      <p>Em entrega</p>
                    </div>
                  )}

                  {order.deliveredAt !== null && order.returnedAt === null && (
                    <div className="flex items-center gap-2">
                      <Icons.packageCheck className="size-4" />
                      <p>Entregue</p>
                    </div>
                  )}

                  {order.returnedAt !== null && (
                    <div className="flex items-center gap-2">
                      <Icons.packageX className="size-4" />
                      <p>Retornado</p>
                    </div>
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Cliente</TableCell>
                <TableCell className="flex justify-end">
                  {order.customer}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Endereço
                </TableCell>
                <TableCell className="flex justify-end">
                  {`${order.street} - ${order.neighborhood}`}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Cidade</TableCell>
                <TableCell className="flex justify-end">{order.city}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">CEP</TableCell>
                <TableCell className="flex justify-end">{order.cep}</TableCell>
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
                  <Card className="">
                    <CardContent className="max-h-[200px]">
                      <Dialog
                        open={openDeliveredImage}
                        onOpenChange={setOpenDeliveredImage}
                      >
                        <Map
                          provider={osm}
                          defaultCenter={[
                            Number(order.latitude),
                            Number(order.longitude),
                          ]}
                          defaultZoom={14}
                          height={199}
                          width={400}
                        >
                          <Marker
                            anchor={[
                              Number(order.latitude),
                              Number(order.longitude),
                            ]}
                            onClick={() => order.image && handleSelectOrders()}
                          />

                          <ZoomControl />
                        </Map>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="flex gap-2">
                              Entrega realizada:
                              <p className="text-sm">
                                {order.deliveredAt &&
                                  formatDistanceToNow(
                                    new Date(order.deliveredAt),
                                    {
                                      locale: ptBR,
                                      addSuffix: true,
                                    },
                                  )}
                              </p>
                            </DialogTitle>
                          </DialogHeader>
                          {order.image && <img src={order.image} alt="" />}
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ) : (
        <OrderDetailsSkeleton />
      )}
    </DialogContent>
  )
}
