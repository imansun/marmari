import { Injectable, LoggerService, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class AppLogger implements LoggerService {
  private context?: string;

  setContext(context: string): void {
    this.context = context;
  }

  private formatMessage(
    level: string,
    message: unknown,
    trace?: string,
  ): string {
    const timestamp = new Date().toISOString();
    const ctx = this.context ? `[${this.context}]` : '';
    const traceStr = trace ? `\n${trace}` : '';
    return `${timestamp} ${level} ${ctx} ${String(message)}${traceStr}`;
  }

  log(message: unknown, ...optionalParams: unknown[]): void {
    console.log(this.formatMessage('LOG', message), ...optionalParams);
  }

  error(message: unknown, trace?: string, ...optionalParams: unknown[]): void {
    console.error(
      this.formatMessage('ERROR', message, trace),
      ...optionalParams,
    );
  }

  warn(message: unknown, ...optionalParams: unknown[]): void {
    console.warn(this.formatMessage('WARN', message), ...optionalParams);
  }

  debug(message: unknown, ...optionalParams: unknown[]): void {
    console.debug(this.formatMessage('DEBUG', message), ...optionalParams);
  }

  verbose(message: unknown, ...optionalParams: unknown[]): void {
    console.log(this.formatMessage('VERBOSE', message), ...optionalParams);
  }
}
