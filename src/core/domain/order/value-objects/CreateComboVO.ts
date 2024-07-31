import z from 'zod'

// TODO: fazer um object com os dados do Combo a ser criado quando for criado o Order
export const createComboSchema = z.object({
  name: z.string(),
})
