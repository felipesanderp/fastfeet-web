import { api } from '@/lib/axios'

export interface UpdateDeliverymanPasswordParams {
  deliverymanId: string
  password: string
}

export async function updateDeliverymanPassword({
  deliverymanId,
  password,
}: UpdateDeliverymanPasswordParams) {
  await api.patch(`/accounts/deliveryman/${deliverymanId}`, {
    password,
  })
}
