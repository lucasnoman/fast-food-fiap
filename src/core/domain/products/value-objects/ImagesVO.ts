import z from 'zod'

export const productImageSchema = z.array(z.string().url())

export type ProductImagesVO = z.infer<typeof productImageSchema>
