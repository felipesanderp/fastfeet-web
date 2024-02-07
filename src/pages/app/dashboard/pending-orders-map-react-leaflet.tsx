import 'leaflet/dist/leaflet.css'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

interface Order {
  id: number
  latitude: number
  longitude: number
}

interface MapProps {
  orders: Order[]
}

export function PendingOrdersMap({ orders }: MapProps) {
  return (
    <div className="map-container">
      <MapContainer
        center={[-25.4124493, -49.2298433]}
        zoom={11}
        style={{ width: '100%', height: '500px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {orders.map((order) => (
          <Marker key={order.id} position={[order.latitude, order.longitude]}>
            <Popup position={[order.latitude, order.longitude]} closeOnClick>
              <div>
                <h2>Order Info</h2>
                <p>Order ID: {order.id}</p>
                <p>Latitude: {order.latitude}</p>
                <p>Longitude: {order.longitude}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
