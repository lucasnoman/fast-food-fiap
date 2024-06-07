import { Product } from 'src/core/domain/products/entities/Product'

export interface ProductServicePort {
  getProducts(): Promise<Product[]>
  createProduct(product: Product): Promise<void>
  getProductById(id: number): Promise<Product>
}
