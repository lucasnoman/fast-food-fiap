import { Customer } from 'src/core/domain/customer/entities/Customer'

import { CustomerPrismaPort } from '../ports/CustomerPrismaPort'

export class CustomerService {
  constructor(private readonly customerRepository: CustomerPrismaPort) {}

  async createCustomer(customer: Customer): Promise<void> {
    try {
      await this.customerRepository.createCustomer(customer)
    } catch (error) {
      console.log('❌ ', error)
      throw error
    }
  }

  async getCustomerByCpf(cpf: string): Promise<Customer> {
    return this.customerRepository.getCustomerByCpf(cpf)
  }
}
