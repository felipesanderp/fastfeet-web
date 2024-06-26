import { api } from '@/lib/axios'

export interface GetDeliverymanParams {
  deliverymanId: string
}

export interface GetDeliverymanResponse {
  id: string
  name: string
  cpf: string
}

export async function getDeliveryman({ deliverymanId }: GetDeliverymanParams) {
  const response = await api.get<GetDeliverymanResponse>(
    `/users/deliveryman/${deliverymanId}`,
  )

  return response.data
}
