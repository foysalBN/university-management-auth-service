import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';

// 🚀 uncaughtException
process.on('uncaughtException', err => {
  errorLogger.error('💀 uncaughtException ~ ', err);
  process.exit(1);
});

let server: Server;
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('🛢 database is connected successfully.');

    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    errorLogger.error('Failed to connect database ~ ', err);
  }

  // 🚀 unhandledRejection
  process.on('unhandledRejection', error => {
    console.log(
      '💀Unhandled Rejection detected, We are closing our server....'
    );
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

// console.log(x) //create 💀 uncaughtException

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received!');
  if (server) {
    server.close();
  }
});

bootstrap();
