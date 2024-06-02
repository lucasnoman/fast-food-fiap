import { Product } from '../../domain/products/entities/Product'

export interface ProductPort {
  getProducts(): Promise<Product[]>
  // getProductById(id: number): Promise<Product>
}
