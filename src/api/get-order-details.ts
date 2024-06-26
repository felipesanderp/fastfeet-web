import { api } from '@/lib/axios'

export interface GetOrderDetailsParams {
  orderId: string
}

export interface GetOrdersResponse {
  orderId: string
  description: string
  image: string | null
  postedAt: string | null
  withdrawnAt: string | null
  deliveredAt: string | null
  returnedAt: string | null
  customerId: string
  customer: string
  street: string
  number: number
  neighborhood: string
  city: string
  cep: string
  latitude: string
  longitude: string
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get<GetOrdersResponse>(`/orders/${orderId}`)

  return response.data
}
