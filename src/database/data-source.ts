import { DataSource } from 'typeorm';
import { config } from 'dotenv';
config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '97531372',
  database: process.env.DB_DATABASE || process.env.DB_NAME || 'superapp',
  entities: ['src/modules/**/*.entity.ts', 'src/database/entities/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
  extra: {
    searchPath: 'public',
  },
});
