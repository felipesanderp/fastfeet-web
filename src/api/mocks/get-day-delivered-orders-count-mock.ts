import { http, HttpResponse } from 'msw'

import { GetDayDeliveredOrdersCountResponse } from '../get-day-delivered-orders-count'

export const getDayDeliveredOrdersCountMock = http.get<
  never,
  never,
  GetDayDeliveredOrdersCountResponse
>('/metrics/day-delivered-orders-count', () => {
  return HttpResponse.json({
    todayOrders: 3,
    diffFromYesterday: -5,
  })
})
