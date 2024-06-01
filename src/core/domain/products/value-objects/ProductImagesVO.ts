import z from 'zod'

export const productImageSchema = z.array(
  z.object({
    id: z.number(),
    url: z.string().url(),
    productId: z.number(),
  })
)

export type ProductImagesVO = z.infer<typeof productImageSchema>
