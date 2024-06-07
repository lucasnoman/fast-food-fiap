import { Customer } from 'src/core/domain/customer/entities/Customer'

import { CustomerPort } from '../ports/CustomerPort'

export class CustomerService {
  constructor(private readonly customerRepository: CustomerPort) {}

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
