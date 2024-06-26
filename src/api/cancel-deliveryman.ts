import { api } from '@/lib/axios'

export interface CancelDeliverymanParams {
  deliverymanId: string
}

export async function cancelDeliveryman({
  deliverymanId,
}: CancelDeliverymanParams) {
  await api.delete(`/accounts/deliveryman/cancel/${deliverymanId}`)
}
