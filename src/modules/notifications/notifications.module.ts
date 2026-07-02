import { Module } from '@nestjs/common';
import { NotificationsGateway } from './notifications.gateway';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { NotificationSubscriber } from '../../database/subscribers/notification.subscriber';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsGateway, NotificationsService, NotificationSubscriber],
  exports: [NotificationsService],
})
export class NotificationsModule {}
