import { api } from '@/lib/axios'

export interface SignInAdminBody {
  cpf: string
  password: string
}

export async function signInAdmin({ cpf, password }: SignInAdminBody) {
  const response = await api.post('/sessions', { cpf, password })

  return response.data
}
