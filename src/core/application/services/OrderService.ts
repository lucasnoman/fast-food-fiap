import { Order } from 'src/core/domain/order/entities/Order'

import { OrderPrismaPort } from '../ports/OrderPrismaPort'

// NOTE Order cria o Combo e adiciona no ComboProducts
// Order -> Combo -> ComboProducts
// Todas as 3 tabelas poderão sofrer UPDATE
export class OrderService {
  constructor(private readonly orderRepository: OrderPrismaPort) {}

  async openOrder(order: Order): Promise<void> {
    try {
      await this.orderRepository.openOrder(order)
    } catch (error) {
      console.log('❌ ', error)
      throw error
    }
  }
}
