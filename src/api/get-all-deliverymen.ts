import { api } from '@/lib/axios'

export interface GetAllDeliverymenQuery {
  page?: number | null
  perPage?: number | null
}

export type GetAllDeliverymenResponse = {
  deliverymen: {
    id: string
    name: string
    cpf: string
  }[]
}

export async function getAllDeliverymen({
  page,
  perPage,
}: GetAllDeliverymenQuery) {
  const response = await api.get<GetAllDeliverymenResponse>(
    '/users/deliverymen',
    {
      params: {
        page,
        perPage,
      },
    },
  )

  return response.data
}
