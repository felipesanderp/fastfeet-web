import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDayDeliveredOrdersCountMock } from './get-day-delivered-orders-count-mock'
import { getMonthDeliveredOrdersCountMock } from './get-month-delivered-orders-count-mock'
import { getMonthReturnedOrdersCountMock } from './get-month-returned-orders-mock'
import { getOrdersMock } from './get-orders-mock'
import { getPendingOrdersCountMock } from './get-pending-orders-count-mock'

export const worker = setupWorker(
  getDayDeliveredOrdersCountMock,
  getMonthDeliveredOrdersCountMock,
  getMonthReturnedOrdersCountMock,
  getPendingOrdersCountMock,
  getOrdersMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
