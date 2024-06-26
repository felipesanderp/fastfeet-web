import { api } from '@/lib/axios'

export interface GetRecipientParams {
  recipientId: string
}

export interface GetRecipientResponse {
  id: string
  name: string
  cpf: string
}

export async function getRecipient({ recipientId }: GetRecipientParams) {
  const response = await api.get<GetRecipientResponse>(
    `/users/recipient/${recipientId}`,
  )

  return response.data
}
