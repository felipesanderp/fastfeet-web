import { api } from '@/lib/axios'

export interface RegisterDeliverymanBody {
  name: string
  cpf: string
  password: string
}

export async function registerDeliveryman({
  name,
  cpf,
  password,
}: RegisterDeliverymanBody) {
  await api.patch(`/accounts/deliveryman`, {
    name,
    cpf,
    password,
  })
}
