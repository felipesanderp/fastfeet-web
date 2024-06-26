import { api } from '@/lib/axios'

export interface CancelRecipientParams {
  recipientId: string
}

export async function cancelRecipient({ recipientId }: CancelRecipientParams) {
  await api.delete(`/accounts/recipient/cancel/${recipientId}`)
}
