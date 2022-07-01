import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { readFileSync } from 'fs';
import { join } from 'path';
import { PORT, NODE_ENV } from '@env';

async function bootstrap() {
  try {
    let app;

    if (NODE_ENV === 'production') {
      const httpsOptions = {
        key: readFileSync(join(__dirname, '../ssl/', 'key.pem')),
        cert: readFileSync(join(__dirname, '../ssl/', 'cert.pem')),
      };

      app = await NestFactory.create(AppModule, {
        bufferLogs: true,
        httpsOptions,
      });
    } else {
      app = await NestFactory.create(AppModule, {
        bufferLogs: true,
      });
    }

    // cors
    app.enableCors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    });

    app.enableShutdownHooks();

    await app.listen(PORT);

    Logger.log(
      `🚀  Server is listening on port ${PORT.toString()}`,
      'Bootstrap',
      false,
    );
  } catch (error) {
    Logger.error(`❌  Error starting server, ${error}`, '', 'Bootstrap', false);
    process.exit();
  }
}
bootstrap().catch((e) => {
  Logger.error(`❌  Error starting server, ${e}`, '', 'Bootstrap', false);
  throw e;
});
