import { z } from 'zod'

export const deliverymanSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.literal('deliveryman'),
  status: z.string(),
  imageURL: z.string(),
})

export type Deliveryman = z.infer<typeof deliverymanSchema>
