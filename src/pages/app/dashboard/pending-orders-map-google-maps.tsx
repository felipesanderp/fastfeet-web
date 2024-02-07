import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api'
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

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyB1VwnaddUDDFilWbEyFLhbRRZJwYwCNZc',
  })

  const mapContainerStyle = {
    width: '100%',
    height: '500px',
  }

  const center = {
    lat: -25.4124493,
    lng: -49.2298433,
  }

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  }

  if (loadError) return <div>Error loading maps</div>
  if (!isLoaded) return <div>Loading maps...</div>

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={11}
      options={options}
    >
      {orders.map((order) => (
        <Marker
          key={order.id}
          position={{ lat: order.latitude, lng: order.longitude }}
        />
      ))}
    </GoogleMap>
  )
}
