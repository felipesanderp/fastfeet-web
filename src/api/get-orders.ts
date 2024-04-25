import { api } from '@/lib/axios'

export interface GetOrdersQuery {
  pageIndex?: number | null
  perPage?: number | null
  orderId?: string | null
  recipient?: string | null
  status?: string | null
}

export interface GetOrdersResponse {
  orders: {
    orderId: string
    description: string
    recipient: string
    status: 'pending' | 'delivering' | 'delivered'
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({
  pageIndex,
  orderId,
  recipient,
  status,
}: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      orderId,
      recipient,
      status,
    },
  })

  return response.data
}
