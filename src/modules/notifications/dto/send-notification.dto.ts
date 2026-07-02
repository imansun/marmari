import { IsString, IsOptional, IsObject, IsIn } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SendNotificationDto {
  @ApiProperty({ example: 'uuid-of-user' })
  @IsString()
  userId: string;

  @ApiProperty({ enum: ['info', 'success', 'warning', 'error'], example: 'info' })
  @IsString()
  @IsIn(['info', 'success', 'warning', 'error'])
  type: string;

  @ApiProperty({ example: 'سامانه' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'یک پیام جدید دارید' })
  @IsString()
  message: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsObject()
  data?: Record<string, unknown>;
}

export class BroadcastNotificationDto {
  @ApiProperty({ enum: ['info', 'success', 'warning', 'error'], example: 'info' })
  @IsString()
  @IsIn(['info', 'success', 'warning', 'error'])
  type: string;

  @ApiProperty({ example: 'اعلام سیستمی' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'سیستم در حال بروزرسانی است' })
  @IsString()
  message: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsObject()
  data?: Record<string, unknown>;
}
