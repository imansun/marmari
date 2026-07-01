import { Injectable } from '@nestjs/common';
import { CacheService } from '../cache';

@Injectable()
export class HealthService {
  constructor(private readonly cache: CacheService) {}

  async check(): Promise<Record<string, unknown>> {
    const checks: Record<string, unknown> = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };

    try {
      await this.cache.get('health-check');
      checks.redis = 'connected';
    } catch {
      checks.redis = 'disconnected';
      checks.status = 'degraded';
    }

    return checks;
  }
}
