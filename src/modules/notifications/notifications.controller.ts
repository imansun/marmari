import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { NotificationsService } from './notifications.service';
import { SendNotificationDto, BroadcastNotificationDto } from './dto/send-notification.dto';
import { Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Notifications')
@ApiBearerAuth()
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Send notification to a user' })
  send(@Body() dto: SendNotificationDto) {
    this.notificationsService.notifyUser(dto.userId, {
      type: dto.type as any,
      title: dto.title,
      message: dto.message,
      data: dto.data,
    });
    return { sent: true };
  }

  @Post('broadcast')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Broadcast notification to all users' })
  broadcast(@Body() dto: BroadcastNotificationDto) {
    this.notificationsService.notifyAll({
      type: dto.type as any,
      title: dto.title,
      message: dto.message,
      data: dto.data,
    });
    return { broadcast: true };
  }
}
