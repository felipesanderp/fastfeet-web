import { http, HttpResponse } from 'msw'

import { GetMonthOrdersCountResponse } from '../get-month-delivered-orders-count'

export const getMonthDeliveredOrdersCountMock = http.get<
  never,
  never,
  GetMonthOrdersCountResponse
>('/metrics/month-orders-count', () => {
  return HttpResponse.json({
    currentMonthOrdersCount: 11,
    diffFromLastMonth: 7,
  })
})
