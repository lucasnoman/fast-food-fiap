import { Order } from 'src/core/domain/order/entities/Order'

export interface OrderPrismaPort {
  openOrder(order: Order): Promise<void>
}
