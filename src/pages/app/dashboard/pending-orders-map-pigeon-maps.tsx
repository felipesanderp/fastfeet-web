import { useQuery } from '@tanstack/react-query'
import { Map, Marker, ZoomControl } from 'pigeon-maps'
import { maptiler } from 'pigeon-maps/providers'
import { useState } from 'react'

import { getDayPendingOrdersAmount } from '@/api/get-day-pending-orders-count'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'

interface Order {
  id: string
  postedAt: Date
  withdrawnAt: Date
  recipient: {
    address: {
      latitude: string
      longitude: string
    }
  }
}

export function PendingOrdersMap() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [open, setOpen] = useState(false)

  const maptilerProvider = maptiler('esHUeOmxJcVLUhhlheLe', 'streets')

  const { data: dayPendingOrdersCount } = useQuery({
    queryKey: ['metrics', 'day-pending-orders-count'],
    queryFn: getDayPendingOrdersAmount,
  })

  function handleSelectOrder(order: Order) {
    setSelectedOrder(order)
    setOpen(true)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Map
        provider={maptilerProvider}
        defaultCenter={[-25.4124493, -49.2298433]}
        defaultZoom={11}
        height={500}
      >
        {dayPendingOrdersCount?.todayPendingOrders.map((order) => (
          <Marker
            key={order.id}
            anchor={[
              Number(order.recipient.address.latitude),
              Number(order.recipient.address.longitude),
            ]}
            onClick={() => handleSelectOrder(order)}
            width={38}
            height={38}
          />
        ))}
        <ZoomControl />
      </Map>
      {selectedOrder && (
        <DialogContent>
          <DialogHeader>Informações do pedido</DialogHeader>
          <div>
            <p>Order ID: {selectedOrder.id}</p>
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}
