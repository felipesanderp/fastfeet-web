import { api } from '@/lib/axios'

export interface UpdateRecipientPasswordParams {
  recipientId: string
  password: string
}

export async function updateRecipientPassword({
  recipientId,
  password,
}: UpdateRecipientPasswordParams) {
  await api.patch(`/accounts/recipient/${recipientId}`, {
    password,
  })
}
