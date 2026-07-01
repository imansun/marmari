import appConfig from './app.config';
import databaseConfig from './database.config';
import jwtConfig from './jwt.config';
import redisConfig from './redis.config';
import storageConfig from './storage.config';

export const configs = [
  appConfig,
  databaseConfig,
  jwtConfig,
  redisConfig,
  storageConfig,
];

export { appConfig, databaseConfig, jwtConfig, redisConfig, storageConfig };
