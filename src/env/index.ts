import * as dotenv from 'dotenv';
dotenv.config();

const db = ['postgres', 'mysql', 'mariadb'] as const;
type DB = typeof db[number];

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development';
const CLIENT_HOST: string = process.env.CLIENT_HOST || 'http://localhost:3000';
const SERVER_HOST: string = process.env.SERVER_HOST || 'http://localhost';

// typeorm
const DATABASE_TYPE: DB =
  db[db.findIndex((x) => x === (process.env?.DATABASE_TYPE || 'mysql'))];
const DATABASE_HOST: string = process.env.DATABASE_HOST || 'localhost';
const DATABASE_PORT: number = +process.env.DATABASE_PORT || 5432;
const DATABASE_USER: string = process.env.DATABASE_USER || 'root';
const DATABASE_PASSWORD: string = process.env.DATABASE_PASSWORD || 'root';
const DATABASE_DB: string = process.env.DATABASE_DB || 'csurf';

const PORT: number = +process.env.PORT || 8080;

export {
  NODE_ENV,
  CLIENT_HOST,
  PORT,
  DATABASE_TYPE,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_DB,
  SERVER_HOST,
};
