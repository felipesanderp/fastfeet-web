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
  const [selectedOrders, setSelectedOrders] = useState<Order[] | null>(null)
  const [open, setOpen] = useState(false)

  const maptilerProvider = maptiler('esHUeOmxJcVLUhhlheLe', 'streets')

  const { data: dayPendingOrdersCount } = useQuery({
    queryKey: ['metrics', 'day-pending-orders-count'],
    queryFn: getDayPendingOrdersAmount,
  })

  const groupedOrders: { [key: string]: Order[] } = {}
  dayPendingOrdersCount?.todayPendingOrders.forEach((order) => {
    const key = `${order.recipient.address.latitude}-${order.recipient.address.longitude}`
    if (!groupedOrders[key]) {
      groupedOrders[key] = []
    }
    groupedOrders[key].push(order)
  })

  function handleSelectOrders(orders: Order[]) {
    setSelectedOrders(orders)
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
        {Object.values(groupedOrders).map((group, index) => {
          const [latitude, longitude] = [
            group[0].recipient.address.latitude,
            group[0].recipient.address.longitude,
          ]

          return (
            <Marker
              key={index}
              anchor={[Number(latitude), Number(longitude)]}
              payload={group}
              onClick={() => handleSelectOrders(group)}
            />
          )
        })}
        {/* {dayPendingOrdersCount?.todayPendingOrders.map((order) => (
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
        ))} */}
        <ZoomControl />
      </Map>
      {selectedOrders && (
        <DialogContent>
          <DialogHeader>Informações do(s) pedido(s)</DialogHeader>
          <div>
            {selectedOrders.map((order) => (
              <p key={order.id}>Order ID: {order.id}</p>
            ))}
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}
