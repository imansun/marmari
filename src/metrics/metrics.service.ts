import { Injectable, OnModuleInit } from '@nestjs/common';

import { Counter, Histogram, Gauge } from 'prom-client';

@Injectable()
export class MetricsService implements OnModuleInit {
  httpRequestsTotal: Counter<string>;
  httpRequestDuration: Histogram<string>;
  activeUsers: Gauge<string>;

  onModuleInit(): void {
    this.httpRequestsTotal = new Counter({
      name: 'marmari_http_requests_total',
      help: 'Total HTTP requests',
      labelNames: ['method', 'path', 'status'],
    });

    this.httpRequestDuration = new Histogram({
      name: 'marmari_http_request_duration_seconds',
      help: 'HTTP request duration in seconds',
      labelNames: ['method', 'path'],
      buckets: [0.01, 0.05, 0.1, 0.5, 1, 2, 5],
    });

    this.activeUsers = new Gauge({
      name: 'marmari_active_users',
      help: 'Currently active users',
    });
  }

  incrementHttpRequest(method: string, path: string, status: number): void {
    this.httpRequestsTotal.inc({ method, path, status: String(status) });
  }

  observeHttpRequest(method: string, path: string, duration: number): void {
    this.httpRequestDuration.observe({ method, path }, duration);
  }

  setActiveUsers(count: number): void {
    this.activeUsers.set(count);
  }
}
