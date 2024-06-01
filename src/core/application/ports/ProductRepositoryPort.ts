import { Product } from 'src/core/domain/products/entities/Product'

export interface ProductRepositoryPort {
  listProducts(): Promise<Product[]>
}
