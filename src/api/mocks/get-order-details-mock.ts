import { http, HttpResponse } from 'msw'

import { GetOrderDetailsParams, GetOrdersResponse } from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrdersResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    orderId: params.orderId,
    description: 'Produto comprado para revender',
    image:
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    customer: 'John Doe',
    customerId: 'customer-id-1',
    city: 'Quatro Barras',
    neighborhood: 'Jardim Patricia',
    street: 'Rua José Rodrigues Fortes',
    number: 171,
    cep: '83420-000',
    postedAt: new Date('2024-06-12'),
    withdrawnAt: new Date('2024-06-12'),
    deliveredAt: null,
    returnedAt: null,
    latitude: '-25.3739021',
    longitude: '-49.0826045',
  })
})
