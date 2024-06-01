import { ProductServicePort } from 'src/core/application/ports/ProductServicePort'
import { Product } from 'src/core/domain/products/entities/Product'
import { ProductCategory } from 'src/core/domain/products/value-objects/ProductCategoryVO'

export class ProductServiceController implements ProductServicePort {
  constructor(private productService: ProductServicePort) {}

  async getProductById(id: number): Promise<Product> {
    // TODO: remover isso
    // const product = {
    //   id,
    //   name: 'Milkshake',
    //   category: ProductCategory.ACCOMPANIMENT,
    //   description: 'milk shaked',
    //   price: 10,
    //   images: [
    //     {
    //       id: 1,
    //       url: 'http://teste.com',
    //       productId: 1,
    //     },
    //   ],
    // }

    const product = await this.productService.getProductById(id)

    return new Product(
      product.id,
      product.name,
      product.category,
      product.price,
      product.description,
      product.images
    )
  }
}
