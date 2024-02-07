import { Map, Marker, ZoomControl } from 'pigeon-maps'
import { useState } from 'react'

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

  return (
    <div className="map-container">
      <Map
        defaultCenter={[-25.4124493, -49.2298433]}
        defaultZoom={11}
        height={500}
      >
        {orders.map((order) => (
          <Marker
            key={order.id}
            anchor={[order.latitude, order.longitude]}
            onClick={() => setSelectedOrder(order)}
            width={38}
            height={38}
          />
        ))}
        <ZoomControl />
      </Map>
      {selectedOrder && (
        <div className="order-info">
          <h2>Order Info</h2>
          <p>Order ID: {selectedOrder.id}</p>
          <p>Latitude: {selectedOrder.latitude}</p>
          <p>Longitude: {selectedOrder.longitude}</p>
        </div>
      )}
    </div>
  )
}
