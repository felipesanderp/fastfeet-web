import { z } from 'zod'

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.enum(['admin', 'deliveryman', 'recipient']),
  status: z.string(),
  imageURL: z.string(),
})

export type User = z.infer<typeof userSchema>
