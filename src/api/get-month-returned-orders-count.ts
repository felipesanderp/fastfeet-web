import { api } from '@/lib/axios'

export interface GetMonthReturnedOrdersCountResponse {
  currentMonthReturnedOrdersCount: number
  diffFromLastMonth: number
}

export async function getMonthReturnedOrdersAmount() {
  const response = await api.get<GetMonthReturnedOrdersCountResponse>(
    '/metrics/month-returned-orders-count',
  )

  return response.data
}
