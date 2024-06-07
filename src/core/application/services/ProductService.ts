import { Product } from 'src/core/domain/products/entities/Product'
import { ProductCategory } from 'src/core/domain/products/value-objects/CategoryVO'

import { ProductPrismaPort } from '../ports/ProductPrismaPort'

export class ProductService {
  constructor(private readonly productRepository: ProductPrismaPort) {}

  async createProduct(product: Product): Promise<void> {
    try {
      await this.productRepository.createProduct(product)
    } catch (error) {
      console.error(`❌ Prisma error while creating Product. Code: ${error}`)
      throw error
    }
  }

  async getProducts(): Promise<Product[]> {
    const prismaProducts = await this.productRepository.getProducts()

    try {
      const listOfProducts = prismaProducts!.map((prismaProduct) => {
        const { id, name, category, price, description, images } = prismaProduct
        const listOfImages = images.map((image) => image.url)

        return new Product(id, name, category as ProductCategory, price.toNumber(), description, listOfImages)
      })

      return listOfProducts
    } catch (error) {
      console.error(`❌ Prisma error while listing Products. Code: ${error}`)
      throw error
    }
  }

  async getProductById(id: number): Promise<Product> {
    const prismaProduct = await this.productRepository.getProductById(id)

    try {
      if (prismaProduct) {
        const { id: prodId, name, category, price: prismaPrice, description, images } = prismaProduct || {}

        const price = prismaPrice?.valueOf() || 0
        const listOfImages = images.map((image) => image.url)

        return new Product(prodId, name, category as ProductCategory, price as number, description, listOfImages)
      } else {
        throw new Error('Product not found')
      }
    } catch (error) {
      console.error(`❌ Prisma error while listing Products. Code: ${error}`)
      throw error
    }
  }

  async removeProduct(id: number): Promise<void> {
    try {
      await this.productRepository.removeProduct(id)
    } catch (error) {
      console.error(`❌ Prisma error while removing Product. Code: ${error}`)
    }
  }
}
