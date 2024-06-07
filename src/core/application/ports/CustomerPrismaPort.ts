import { Customer } from 'src/core/domain/customer/entities/Customer'

export interface CustomerPrismaPort {
  createCustomer(customer: Customer): Promise<void>
  getCustomerByCpf(cpf: string): Promise<Customer>
}
