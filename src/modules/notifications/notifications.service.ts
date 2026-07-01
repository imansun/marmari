import { Injectable } from '@nestjs/common';
import { NotificationsGateway } from './notifications.gateway';

export interface NotificationPayload {
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  data?: Record<string, unknown>;
}

@Injectable()
export class NotificationsService {
  constructor(private readonly gateway: NotificationsGateway) {}

  notifyUser(userId: string, notification: NotificationPayload): void {
    this.gateway.notifyUser(userId, 'notification', notification);
  }

  notifyAll(notification: NotificationPayload): void {
    this.gateway.notifyAll('notification', notification);
  }

  notifyChannel(channel: string, event: string, payload: unknown): void {
    this.gateway.notifyChannel(channel, event, payload);
  }

  sendAlert(userId: string, title: string, message: string): void {
    this.notifyUser(userId, { type: 'warning', title, message });
  }

  sendSystemUpdate(message: string): void {
    this.notifyAll({ type: 'info', title: 'System Update', message });
  }
}
