import { Customer } from 'src/core/domain/customer/entities/Customer'

export interface CustomerPort {
  createCustomer(customer: Customer): Promise<void>
}
