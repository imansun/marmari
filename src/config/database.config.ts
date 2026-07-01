import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '97531372',
  database: process.env.DB_DATABASE || 'superapp',
  schemas: (process.env.DB_SCHEMAS || 'public').split(','),
}));
