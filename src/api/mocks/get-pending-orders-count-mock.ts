import { faker } from '@faker-js/faker/locale/pt_BR'
import { http, HttpResponse } from 'msw'

import type { GetPendingOrdersCountResponse } from '../get-pending-orders-count'

type Orders = GetPendingOrdersCountResponse['pendingOrders']

const pendingOrders: Orders = Array.from({ length: 8 }).map((_, i) => {
  return {
    id: `order-${i + 1}`,
    postedAt: new Date(),
    withdrawnAt: new Date(),
    recipient: {
      address: {
        latitude: faker.location
          .nearbyGPSCoordinate({
            origin: [-25.431645, -49.270296],
          })[0]
          .toString(),
        longitude: faker.location
          .nearbyGPSCoordinate({
            origin: [-25.431645, -49.270296],
          })[1]
          .toString(),
      },
    },
  }
})

export const getPendingOrdersCountMock = http.get<
  never,
  never,
  GetPendingOrdersCountResponse
>('/metrics/pending-orders-count', () => {
  return HttpResponse.json({
    pendingOrders,
  })
})
