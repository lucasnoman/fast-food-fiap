import fastify from 'fastify'

import { productsRoutes } from '../routes/ProductRoutes'

export const app = fastify()

app.register(productsRoutes)
