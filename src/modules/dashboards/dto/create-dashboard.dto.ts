import {
  IsString,
  IsOptional,
  IsEnum,
  IsBoolean,
  IsObject,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { WidgetType } from '../entities/dashboard-widget.entity';

export class CreateDashboardDto {
  @ApiProperty()
  @IsString()
  code: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsObject()
  layout?: Record<string, unknown>;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isDefault?: boolean;
}

export class CreateWidgetDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty({ enum: WidgetType })
  @IsEnum(WidgetType)
  type: WidgetType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  reportId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsObject()
  position?: Record<string, number>;

  @ApiPropertyOptional()
  @IsOptional()
  @IsObject()
  options?: Record<string, unknown>;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  dataSource?: string;
}

export class UpdateWidgetPositionDto {
  @ApiProperty()
  @IsObject()
  position: Record<string, number>;
}
