import { Map, Marker, ZoomControl } from 'pigeon-maps'
import { useState } from 'react'

import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'

interface Order {
  id: number
  latitude: number
  longitude: number
}

interface MapProps {
  orders: Order[]
}

export function PendingOrdersMap({ orders }: MapProps) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [open, setOpen] = useState(false)

  function handleSelectOrder(order: Order) {
    setSelectedOrder(order)
    setOpen(true)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Map
        defaultCenter={[-25.4124493, -49.2298433]}
        defaultZoom={11}
        height={500}
      >
        {orders.map((order) => (
          <Marker
            key={order.id}
            anchor={[order.latitude, order.longitude]}
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
