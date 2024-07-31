import { OrderPrismaPort } from 'src/core/application/ports/OrderPrismaPort'
import { Order } from 'src/core/domain/order/entities/Order'

import { prisma } from '../../config/prisma'

export class OrderRepository implements OrderPrismaPort {
  async openOrder(order: Order): Promise<void> {
    await prisma.order.create({
      data: {
        status: order.status,
        paymentStatus: order.paymentStatus,
        customerId: order.customerId,
      },
    })
  }
}
