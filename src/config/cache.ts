import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  config: {
    redis: RedisOptions;
  };
  driver: string;
}

const redisCache = {
  config: {
    redis: {
      host: 'api-ciclo-pagamentos-redis',
      port: 6379,
      password: process.env.REDIS_PASS || undefined,
    },
  },
  driver: 'redis',
} as ICacheConfig;

export default redisCache;
