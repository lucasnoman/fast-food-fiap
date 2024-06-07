import { FastifyReply, FastifyRequest } from 'fastify'
import { ProductServicePort } from 'src/core/application/ports/ProductServicePort'
import { Product } from 'src/core/domain/products/entities/Product'
import { ProductCategory } from 'src/core/domain/products/value-objects/CategoryVO'
import z from 'zod'

export class ProductController {
  constructor(private readonly productService: ProductServicePort) {}

  async getProducts(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    const products = await this.productService.getProducts()
    reply.status(200).send(products)
  }

  async getProductById(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { productId } = z.object({ productId: z.coerce.number() }).parse(req.params)
    const product = await this.productService.getProductById(productId)
    reply.status(200).send(product)
  }

  async createProduct(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    // TODO: remover o zod daqui para que não haja dependências no controller
    const createProductSchema = z.object({
      name: z.string(),
      category: z.nativeEnum(ProductCategory),
      price: z.number(),
      description: z.string().nullable(),
      images: z.array(z.string()).nullable(),
    })

    const { name, category, price, description, images } = createProductSchema.parse(req.body)

    const product = new Product(null, name, category, price, description, images)
    await this.productService.createProduct(product)
    reply.status(201).send()
  }

  async removeProduct(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { productId } = z.object({ productId: z.coerce.number() }).parse(req.params)
    await this.productService.removeProduct(productId)
    reply.status(204).send()
  }
}
