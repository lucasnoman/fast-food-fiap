import { FastifyInstance } from 'fastify'

export async function productsRoutes(app: FastifyInstance) {
  app.get('/products', listProducts)
}
