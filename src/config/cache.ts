import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  driver: 'redis';
  config: {
    redis: RedisOptions;
  };
}

const redisCache = {
  driver: 'redis',
  config: {
    redis: {
      host: 'api-ciclo-pagamentos-redis',
      port: 6379,
      password: '',
    },
  },
} as ICacheConfig;

export default redisCache;
