import { api } from '@/lib/axios'

export interface GetDayPendingOrdersCountResponse {
  todayPendingOrders: {
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
  todayPendingOrdersCount: number
  diffFromYesterdayPendingOrders: number
}

export async function getDayPendingOrdersAmount() {
  const response = await api.get<GetDayPendingOrdersCountResponse>(
    '/metrics/day-pending-orders-count',
  )

  return response.data
}
