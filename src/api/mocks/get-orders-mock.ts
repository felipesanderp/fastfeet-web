import { faker } from '@faker-js/faker'
import { http, HttpResponse } from 'msw'

import type { GetOrdersResponse } from '../get-orders'

type Orders = GetOrdersResponse['orders']

type OrderStatus = GetOrdersResponse['orders'][number]['status']

const statuses: OrderStatus[] = ['pending', 'delivered', 'delivering']

const orders: Orders = Array.from({ length: 60 }).map((_, i) => {
  return {
    orderId: `order-${i + 1}`,
    recipient: faker.internet.displayName(),
    description: faker.commerce.productDescription(),
    status: statuses[i % 5],
  }
})

export const getOrdersMock = http.get<never, never, GetOrdersResponse>(
  '/orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const pageIndex = searchParams.get('pageIndex')
      ? Number(searchParams.get('pageIndex'))
      : 0
    const perPage = searchParams.get('perPage')
      ? Number(searchParams.get('perPage'))
      : 10
    const recipient = searchParams.get('recipient')
    const orderId = searchParams.get('orderId')
    const status = searchParams.get('status')

    let filteredOrders = orders

    if (recipient) {
      filteredOrders = filteredOrders.filter((order) =>
        order.recipient.includes(recipient),
      )
    }

    if (orderId) {
      filteredOrders = filteredOrders.filter((order) =>
        order.recipient.includes(orderId),
      )
    }

    if (status) {
      filteredOrders = filteredOrders.filter((order) => order.status === status)
    }

    const paginatedOrders = filteredOrders.slice(
      pageIndex * perPage,
      (pageIndex + 1) * perPage,
    )

    return HttpResponse.json({
      orders: paginatedOrders,
    })
  },
)
