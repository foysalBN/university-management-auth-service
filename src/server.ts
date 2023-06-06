import mongoose from 'mongoose'
import app from './app'
import config from './config'

// main().catch(err => console.log(err));

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url)
    console.log('🛢 database is connected successfully.')

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch {
    console.error('Failed to connect database')
  }
}

bootstrap()
