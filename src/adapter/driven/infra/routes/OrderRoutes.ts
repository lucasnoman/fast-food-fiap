// import { FastifyInstance } from 'fastify'
// import { OrderController } from 'src/adapter/driving/web/controllers/OrderController'
// import { OrderService } from 'src/core/application/services/OrderService'

// import { OrderRepository } from '../repository/prisma/OrderRepository'

// export async function orderRoutes(app: FastifyInstance) {
//   const orderRepository = new OrderRepository()
//   const orderService = new OrderService(orderRepository)
//   const orderController = new OrderController(orderService)

//   app.post('/order', orderController.createOrder.bind(orderController))
// }
