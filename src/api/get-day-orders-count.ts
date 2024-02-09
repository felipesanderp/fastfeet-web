import { api } from '@/lib/axios'

export interface GetDayOrdersCountResponse {
  todayOrders: number
  diffFromYesterday: number
}

export async function getDayOrdersAmount() {
  const response = await api.get<GetDayOrdersCountResponse>(
    '/metrics/day-orders-count',
  )

  return response.data
}
