import { Prisma } from '@prisma/client'
import { ProductPort } from 'src/core/application/ports/ProductPort'
import { Product } from 'src/core/domain/products/entities/Product'
import { ProductCategory } from 'src/core/domain/products/value-objects/ProductCategoryVO'

import { prisma } from '../../config/prisma'

export class ProductRepository implements ProductPort {
  async getProducts(): Promise<Product[]> {
    try {
      const prismaProducts = await prisma.product.findMany({
        include: { images: true },
      })

      const listOfProducts = prismaProducts!.map((prismaProduct) => {
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
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError)
        console.error(`❌ Prisma error in listing Products. Code: ${err.code}`)

      throw err
    }
  }
}
