import fastify from 'fastify'

import { customerRoutes } from '../routes/CustomerRoutes'
import { productsRoutes } from '../routes/ProductRoutes'

export const app = fastify()

app.register(productsRoutes)
app.register(customerRoutes)
