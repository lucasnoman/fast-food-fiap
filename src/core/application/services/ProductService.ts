import { Product } from 'src/core/domain/products/entities/Product'

import { ProductServicePort } from '../ports/ProductServicePort'

export class ProductService {
  constructor(private productServicePort: ProductServicePort) {
    this.productServicePort = productServicePort
  }

  async getProductDetails(id: string): Promise<Product> {
    return await this.productServicePort.getProductById(id)
  }
}
