import { FastifyReply, FastifyRequest } from 'fastify'
import { ProductPort } from 'src/core/application/ports/ProductPort'

export class ProductController {
  constructor(private readonly productService: ProductPort) {}

  async getProducts(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    const products = await this.productService.getProducts()
    reply.status(201).send(products)
  }
}
