import { api } from '@/lib/axios'

export interface GetPendingOrdersCountResponse {
  pendingOrders: {
    id: string
    postedAt: Date
    withdrawnAt: Date
    recipient: {
      address: {
        latitude: string
        longitude: string
      }
    }
  }[]
}

export async function getPendingOrdersAmount() {
  const response = await api.get<GetPendingOrdersCountResponse>(
    '/metrics/pending-orders-count',
  )

  return response.data
}
