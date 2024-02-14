import { api } from '@/lib/axios'

export interface GetDayPendingOrdersCountResponse {
  todayPendingOrders: number
  diffFromYesterdayPendingOrders: number
}

export async function getDayPendingOrdersAmount() {
  const response = await api.get<GetDayPendingOrdersCountResponse>(
    '/metrics/day-pending-orders-count',
  )

  return response.data
}
