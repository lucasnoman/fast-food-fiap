import { Product } from '../../domain/products/entities/Product'

export interface ProductPort {
  getProducts(): Promise<Product[]>
  createProduct(product: Product): Promise<void>
  getProductById(id: number): Promise<Product>
}
