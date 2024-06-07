import { FastifyInstance } from 'fastify'
import { CustomerController } from 'src/adapter/driving/web/controllers/CustomerController'
import { CustomerService } from 'src/core/application/services/CustomerService'

import { CustomerRepository } from '../repository/prisma/CustomerRepository'

export async function customerRoutes(app: FastifyInstance) {
  const customerRepository = new CustomerRepository()
  const customerService = new CustomerService(customerRepository)
  const customerController = new CustomerController(customerService)

  app.post('/customer', customerController.createCustomer.bind(customerController))
  app.get('/customer/:cpf', customerController.getCustomerByCpf.bind(customerController))
}
