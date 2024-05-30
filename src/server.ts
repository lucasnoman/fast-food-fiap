import { env } from './adapter/driven/infra/env'
import { app } from './adapter/driven/infra/http/app'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log('🚀 HTTP Server Running!')
  })
  .catch((error) => {
    console.error("❌ HTTP Server can't start", error)
  })
