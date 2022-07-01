import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {
  DATABASE_DB,
  DATABASE_HOST,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_TYPE,
  DATABASE_USER,
  NODE_ENV,
} from '@env';

// Entity

export class ConfigService {
  constructor() {
    /**
     *
     */
  }

  get typeOrmConfig(): TypeOrmModuleOptions {
    const entities = [];

    return {
      entities,
      keepConnectionAlive: true,
      type: DATABASE_TYPE,
      host: DATABASE_HOST,
      port: DATABASE_PORT,
      username: DATABASE_USER,
      password: DATABASE_PASSWORD,
      database: DATABASE_DB,
      migrations: [__dirname + '../migrations/**/*{.ts,.js}'],
      synchronize: NODE_ENV === 'production' ? false : true,
      //   synchronize: false,
      // migrationsRun: true,
      // namingStrategy: new SnakeNamingStrategy(),
      // logging: this.nodeEnv === 'development',
    };
  }
}
