import { ProductRepositoryPort } from 'src/core/application/ports/ProductRepositoryPort'
import { Product } from 'src/core/domain/products/entities/Product'
import { ProductCategory } from 'src/core/domain/products/value-objects/ProductCategoryVO'

import { prisma } from '../../infra/config/prisma'

export class ProductRepository implements ProductRepositoryPort {
  async listProducts(): Promise<Product[]> {
    const prismaProducts = await prisma.product.findMany({
      include: {
        images: true,
      },
    })

    const listOfProducts = prismaProducts.map((prismaProduct) => {
      const { id, name, category, price, description, images } = prismaProduct

      return new Product(
        id,
        name,
        category as ProductCategory,
        price.toNumber(),
        description,
        images
      )
    })

    return listOfProducts
  }
}
