import fastify from 'fastify'

import { customerRoutes } from '../routes/CustomerRoutes'
// import { orderRoutes } from '../routes/OrderRoutes'
import { productsRoutes } from '../routes/ProductRoutes'

export const app = fastify()

app.register(productsRoutes)
app.register(customerRoutes)
// app.register(orderRoutes)
