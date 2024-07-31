import { Order } from 'src/core/domain/order/entities/Order'

export interface OrderServicePort {
  openOrder(order: Order): Promise<void>
}
