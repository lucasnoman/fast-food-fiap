import { Product } from 'src/core/domain/products/entities/Product'

import { ProductPort } from '../ports/ProductPort'

export class ProductService {
  constructor(private readonly productRepository: ProductPort) {}

  async getProducts(): Promise<Product[]> {
    return this.productRepository.getProducts()
  }
}
