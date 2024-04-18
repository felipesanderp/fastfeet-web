import { api } from '@/lib/axios'

export interface GetMonthOrdersCountResponse {
  currentMonthOrdersCount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount() {
  const response = await api.get<GetMonthOrdersCountResponse>(
    '/metrics/month-orders-count',
  )

  return response.data
}
