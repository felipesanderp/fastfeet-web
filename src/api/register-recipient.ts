import { api } from '@/lib/axios'

export interface RegisterRecipientBody {
  name: string
  cpf: string
  password: string
  street: string
  number: number
  neighborhood: string
  city: string
  cep: string
}

export async function registerRecipient({
  name,
  cpf,
  password,
  street,
  city,
  neighborhood,
  cep,
  number,
}: RegisterRecipientBody) {
  await api.patch(`/accounts/recipient`, {
    name,
    cpf,
    password,
    street,
    city,
    neighborhood,
    cep,
    number,
  })
}
