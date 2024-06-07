import { Product as PrismaProduct, ProductImage } from '@prisma/client'
import { Product } from 'src/core/domain/products/entities/Product'

export interface ProductPrismaPort {
  getProducts(): Promise<(PrismaProduct & { images: ProductImage[] })[]>
  createProduct(product: Product): Promise<void>
  getProductById(id: number): Promise<PrismaProduct & { images: ProductImage[] }>
  removeProduct(id: number): Promise<void>
  updateProduct(product: Product): Promise<void>
}
