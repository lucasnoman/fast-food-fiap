import { Product } from '../../domain/products/entities/Product'

export interface ProductServicePort {
  getProductById(id: number): Promise<Product>
}
