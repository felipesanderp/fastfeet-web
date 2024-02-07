import 'mapbox-gl/dist/mapbox-gl.css'

import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

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
      <ReactMapGL
        mapboxAccessToken="pk.eyJ1IjoiZmVsaXBlc2FuZGVycCIsImEiOiJjbHNieHBocDMwaW51Mm9xcjAzOHNsdHd4In0.AawXwKXaidlZSKhFHdiryA"
        initialViewState={{
          latitude: -25.4124493,
          longitude: -49.2298433,
          zoom: 11,
        }}
        style={{ width: '100%', height: '500px' }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        {orders.map((order) => (
          <Marker
            key={order.id}
            latitude={order.latitude}
            longitude={order.longitude}
            onClick={(e) => {
              e.originalEvent.stopPropagation()
              setSelectedOrder(order)
            }}
          >
            <svg
              className="w-8 h-8 text-blue-500 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6c1.657 0 3 1.343 3 3 0 1.657-1.343 3-3 3-1.657 0-3-1.343-3-3 0-1.657 1.343-3 3-3zM12 20s5-4.5 5-7c0-2.25-3.75-5.25-5-6.5-1.25 1.25-5 4.25-5 6.5 0 2.5 5 7 5 7z"
              ></path>
            </svg>
          </Marker>
        ))}
        {selectedOrder && (
          <Popup
            latitude={selectedOrder.latitude}
            longitude={selectedOrder.longitude}
            onClose={() => setSelectedOrder(null)}
            anchor="top"
          >
            <div>
              <h2>Order Info</h2>
              <p>Order ID: {selectedOrder.id}</p>
              <p>Latitude: {selectedOrder.latitude}</p>
              <p>Longitude: {selectedOrder.longitude}</p>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  )
}
