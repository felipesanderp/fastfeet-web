import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDayDeliveredOrdersCountMock } from './get-day-delivered-orders-count-mock'

export const worker = setupWorker(getDayDeliveredOrdersCountMock)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
