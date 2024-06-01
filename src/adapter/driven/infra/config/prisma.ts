import { PrismaClient } from '@prisma/client'
import { env } from 'src/adapter/driven/infra/env'

export const prisma = new PrismaClient({
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
})
