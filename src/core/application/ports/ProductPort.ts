import { Product as PrismaProduct, ProductImage } from '@prisma/client'
import { Product } from 'src/core/domain/products/entities/Product'

export interface ProductPort {
  getProducts(): Promise<(PrismaProduct & { images: ProductImage[] })[]>
  createProduct(product: Product): Promise<void>
  getProductById(id: number): Promise<PrismaProduct & { images: ProductImage[] }>
}
