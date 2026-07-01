import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

/**
 * Schema-based multi-tenancy interceptor.
 * Resolves which PG schema to query based on the module/entity.
 */
@Injectable()
export class SchemaInterceptor implements NestInterceptor {
  private readonly schemaMap: Record<string, string> = {
    accounts: 'public',
    vouchers: 'public',
    banking: 'public',
    inventory: 'public',
    'purchase-orders': 'public',
    'sales-orders': 'public',
    legacy: 'sepidejam_sg3',
    reports: 'reportserver',
    hr: 'marmari_hr',
  };

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
    const req: any = context.switchToHttp().getRequest();
    const path: string = req.route?.path || req.url || '';
    const moduleName = this.extractModule(path);
    const schema: string =
      req.headers['x-schema-name'] || this.schemaMap[moduleName] || 'public';
    req.tenantSchema = schema;
    /* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
    return next.handle();
  }

  private extractModule(path: string): string {
    const parts = path.split('/').filter(Boolean);
    if (parts.length >= 3) return parts[2];
    return '';
  }
}
