import { Product as PrismaProduct, ProductImage } from '@prisma/client'
import { ProductPrismaPort } from 'src/core/application/ports/ProductPrismaPort'
import { Product } from 'src/core/domain/products/entities/Product'

import { prisma } from '../../config/prisma'

export class ProductRepository implements ProductPrismaPort {
  async createProduct(product: Product): Promise<void> {
    const imageData = product.images?.map((url) => ({ url })) ?? []

    await prisma.product.create({
      data: {
        name: product.name,
        category: product.category,
        price: product.price,
        description: product.description ?? null,
        images: {
          createMany: {
            data: imageData,
          },
        },
      },
    })
  }

  getProducts(): Promise<(PrismaProduct & { images: ProductImage[] })[]> {
    return prisma.product.findMany({ include: { images: true } })
  }

  async getProductById(id: number): Promise<PrismaProduct & { images: ProductImage[] }> {
    const prismaProduct = await prisma.product.findUnique({
      where: { id },
      include: { images: true },
    })

    if (!prismaProduct) {
      throw new Error('Product not found')
    }

    return prismaProduct
  }

  async removeProduct(id: number): Promise<void> {
    await prisma.product.delete({ where: { id }, include: { images: true } })
  }
}
