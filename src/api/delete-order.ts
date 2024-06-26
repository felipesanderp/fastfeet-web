import { api } from '@/lib/axios'

export interface DeleteOrderParams {
  orderId: string
}

export async function deletesOrder({ orderId }: DeleteOrderParams) {
  await api.delete(`/orders/${orderId}`)
}
