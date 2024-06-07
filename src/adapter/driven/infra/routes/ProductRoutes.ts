import { FastifyInstance } from 'fastify'
import { ProductController } from 'src/adapter/driving/web/controllers/ProductController'
import { ProductService } from 'src/core/application/services/ProductService'

import { ProductRepository } from '../repository/prisma/ProductRepository'

export async function productsRoutes(app: FastifyInstance) {
  // NOTE
  /*
    Isso poderia ter sido feito direto dentro do controller, passando o repository
    e o service para serem executados lá, em vez de chamar a interface (PORT).
   */
  const productRepository = new ProductRepository()
  const productService = new ProductService(productRepository)
  const productController = new ProductController(productService)

  app.get('/products', productController.getProducts.bind(productController))
  app.get('/product/:productId', productController.getProductById.bind(productController))
  app.post('/product', productController.createProduct.bind(productController))
  app.delete('/product/:productId', productController.removeProduct.bind(productController))
}
