import { api } from '@/lib/axios'

export interface SignInAdminBody {
  cpf: string
  password: string
}

export type SignInAdminResponse = {
  access_token: string
}

export async function signInAdmin({ cpf, password }: SignInAdminBody) {
  const response = await api.post<SignInAdminResponse>('/sessions', {
    cpf,
    password,
  })

  return response.data
}
