import { CustomerPort } from 'src/core/application/ports/CustomerPort'
import { Customer } from 'src/core/domain/customer/entities/Customer'

import { prisma } from '../../config/prisma'

export class CustomerRepository implements CustomerPort {
  async createCustomer(customer: Customer): Promise<void> {
    await prisma.customer.create({
      data: {
        name: customer.name,
        cpf: customer.cpf || null,
      },
    })
  }
}
