import {
  IsString,
  IsEnum,
  IsOptional,
  IsNumber,
  IsArray,
  IsUUID,
  IsDateString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  MaintenanceType,
  MaintenancePriority,
  MaintenanceStatus,
} from '../entities/maintenance-schedule.entity';
import { TaskStatus } from '../entities/maintenance-task.entity';

export class CreateMaintenanceTaskDto {
  @ApiProperty({ example: 'تعویض تسمه' })
  @IsString()
  description: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  assignedToId?: string;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  estimatedHours?: number;
}

export class CreateMaintenanceScheduleDto {
  @ApiProperty({ example: 'MAINT-001' })
  @IsString()
  @MinLength(1)
  code: string;

  @ApiProperty({ example: 'سرویس دوره ای خط تولید A' })
  @IsString()
  @MinLength(2)
  title: string;

  @ApiProperty({ enum: MaintenanceType })
  @IsEnum(MaintenanceType)
  maintenanceType: MaintenanceType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  workCenterId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  productId?: string;

  @ApiPropertyOptional({ default: MaintenancePriority.MEDIUM })
  @IsOptional()
  @IsEnum(MaintenancePriority)
  priority?: MaintenancePriority;

  @ApiProperty()
  @IsDateString()
  scheduledDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  cost?: number;

  @ApiProperty({ type: [CreateMaintenanceTaskDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateMaintenanceTaskDto)
  tasks: CreateMaintenanceTaskDto[];
}

export class UpdateMaintenanceScheduleDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(MaintenanceStatus)
  status?: MaintenanceStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  scheduledDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  completedDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  cost?: number;
}

export class UpdateMaintenanceTaskDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  actualHours?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}
