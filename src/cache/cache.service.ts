import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { REDIS_CLIENT } from './redis.provider';

@Injectable()
export class CacheService {
  constructor(
    @Inject(REDIS_CLIENT) private readonly redis: Redis,
    private readonly config: ConfigService,
  ) {}

  async get<T>(key: string): Promise<T | null> {
    const val = await this.redis.get(key);
    if (!val) return null;
    try {
      return JSON.parse(val) as T;
    } catch {
      return val as unknown as T;
    }
  }

  async set(key: string, value: unknown, ttl?: number): Promise<void> {
    const t = ttl ?? this.config.get<number>('redis.ttl', 60);
    const data = typeof value === 'string' ? value : JSON.stringify(value);
    await this.redis.set(key, data, 'EX', t);
  }

  async del(key: string): Promise<void> {
    await this.redis.del(key);
  }

  async delPattern(pattern: string): Promise<void> {
    const keys = await this.redis.keys(pattern);
    if (keys.length) await this.redis.del(...keys);
  }

  async reset(): Promise<void> {
    await this.redis.flushdb();
  }

  getClient(): Redis {
    return this.redis;
  }
}
