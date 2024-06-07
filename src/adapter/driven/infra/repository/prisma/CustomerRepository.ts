import { CustomerPort } from 'src/core/application/ports/CustomerPort'
import { Customer } from 'src/core/domain/customer/entities/Customer'

import { prisma } from '../../config/prisma'

export class CustomerRepository implements CustomerPort {
  async createCustomer(customer: Customer): Promise<void> {
    await prisma.customer.create({
      data: {
        name: customer.name,
        cpf: customer.cpf,
      },
    })
  }

  async getCustomerByCpf(cpf: string): Promise<Customer> {
    const customer = await prisma.customer.findFirst({ where: { cpf } })

    if (customer) {
      const foundCustomer = new Customer(customer.id, customer.name, customer.cpf)
      return foundCustomer
    } else {
      throw new Error('❌ Customer not found')
    }
  }
}
