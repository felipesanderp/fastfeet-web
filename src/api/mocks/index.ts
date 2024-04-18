import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDayDeliveredOrdersCountMock } from './get-day-delivered-orders-count-mock'
import { getMonthDeliveredOrdersCountMock } from './get-month-delivered-orders-count-mock'

export const worker = setupWorker(
  getDayDeliveredOrdersCountMock,
  getMonthDeliveredOrdersCountMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
