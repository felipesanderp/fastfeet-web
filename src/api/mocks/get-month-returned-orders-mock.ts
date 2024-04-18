import { http, HttpResponse } from 'msw'

import { GetMonthReturnedOrdersCountResponse } from '../get-month-returned-orders-count'

export const getMonthReturnedOrdersCountMock = http.get<
  never,
  never,
  GetMonthReturnedOrdersCountResponse
>('/metrics/month-returned-orders-count', () => {
  return HttpResponse.json({
    currentMonthReturnedOrdersCount: 2,
    diffFromLastMonth: -2,
  })
})
