import { api } from '@/lib/axios'

export interface GetDayDeliveredOrdersCountResponse {
  todayOrders: number
  diffFromYesterday: number
}

export async function getDayDeliveredOrdersAmount() {
  const response = await api.get<GetDayDeliveredOrdersCountResponse>(
    '/metrics/day-delivered-orders-count',
  )

  return response.data
}
