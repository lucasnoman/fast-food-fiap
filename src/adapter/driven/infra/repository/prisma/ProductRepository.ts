import { Prisma } from '@prisma/client'
import { ProductPort } from 'src/core/application/ports/ProductPort'
import { Product } from 'src/core/domain/products/entities/Product'
import { ProductCategory } from 'src/core/domain/products/value-objects/ProductCategoryVO'

import { prisma } from '../../config/prisma'

export class ProductRepository implements ProductPort {
  async createProduct(product: Product): Promise<void> {
    const imageData = product.images?.map((url) => ({ url })) ?? []

    const productData = {
      name: product.name,
      category: product.category,
      price: product.price,
      description: product.description ?? null,
      images: {
        createMany: {
          data: imageData,
        },
      },
    }

    try {
      await prisma.product.create({ data: productData })
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error(
          `Prisma error while creating Product. Code: ${error.code}`
        )
      }

      throw error
    }
  }

  async getProducts(): Promise<Product[]> {
    try {
      const prismaProducts = await prisma.product.findMany({
        include: { images: true },
      })

      const listOfProducts = prismaProducts!.map((prismaProduct) => {
        const { id, name, category, price, description, images } = prismaProduct
        const listOfImages = images.map((image) => image.url)

        return new Product(
          id,
          name,
          category as ProductCategory,
          price.toNumber(),
          description,
          listOfImages
        )
      })

      return listOfProducts
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError)
        console.error(
          `❌ Prisma error while listing Products. Code: ${err.code}`
        )

      throw err
    }
  }
}
