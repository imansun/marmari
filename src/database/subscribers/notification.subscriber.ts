import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EntityEvents, DomainEvents } from '../../events';
import type { EntityEventPayload } from '../../events';
import { NotificationsService } from '../../modules/notifications/notifications.service';

@Injectable()
export class NotificationSubscriber {
  private readonly logger = new Logger(NotificationSubscriber.name);

  constructor(private readonly notifications: NotificationsService) {}

  @OnEvent(EntityEvents.CREATED)
  handleCreated(payload: EntityEventPayload): void {
    if (this.shouldNotify(payload.entityType)) {
      this.notifications.notifyAll({
        type: 'info',
        title: 'رکورد جدید',
        message: `${payload.entityType} #${payload.entityId} ایجاد شد`,
      });
    }
  }

  @OnEvent(DomainEvents.VOUCHER_CONFIRMED)
  handleVoucherConfirmed(payload: EntityEventPayload): void {
    this.notifications.notifyAll({
      type: 'success',
      title: 'سند تأیید شد',
      message: `سند شماره ${payload.entityId} تأیید شد`,
    });
  }

  @OnEvent(DomainEvents.EMPLOYEE_TERMINATED)
  handleEmployeeTerminated(payload: EntityEventPayload): void {
    this.notifications.notifyAll({
      type: 'warning',
      title: 'اخراج کارمند',
      message: `کارمند ${payload.entityId} اخراج شد`,
    });
  }

  @OnEvent(DomainEvents.PRODUCT_LOW_STOCK)
  handleLowStock(payload: EntityEventPayload): void {
    this.notifications.notifyAll({
      type: 'warning',
      title: 'کمبود موجودی',
      message: `موجودی محصول ${payload.entityId} رو به اتمام است`,
    });
  }

  private shouldNotify(entityType: string): boolean {
    const importantEntities = [
      'Voucher',
      'Invoice',
      'PurchaseOrder',
      'SalesOrder',
      'Contract',
    ];
    return importantEntities.includes(entityType);
  }
}
