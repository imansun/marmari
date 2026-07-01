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
  WorkOrderPriority,
  WorkOrderStatus,
} from '../entities/work-order.entity';

export class CreateOperationDto {
  @ApiProperty({ example: 'برش' })
  @IsString()
  name: string;

  @ApiProperty()
  @IsUUID()
  workCenterId: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @Min(1)
  sequence: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  setupTime?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  runTime?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}

export class CreateWorkOrderDto {
  @ApiProperty({ example: 'WO-001' })
  @IsString()
  @MinLength(1)
  code: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsUUID()
  workCenterId: string;

  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  bomId?: string;

  @ApiProperty({ example: 100 })
  @IsNumber()
  @Min(0.0001)
  quantity: number;

  @ApiPropertyOptional({ default: WorkOrderPriority.MEDIUM })
  @IsOptional()
  @IsEnum(WorkOrderPriority)
  priority?: WorkOrderPriority;

  @ApiProperty()
  @IsDateString()
  startDate: string;

  @ApiProperty()
  @IsDateString()
  endDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ type: [CreateOperationDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOperationDto)
  operations: CreateOperationDto[];
}

export class UpdateWorkOrderDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(WorkOrderStatus)
  status?: WorkOrderStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  producedQuantity?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  defectiveQuantity?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  completedDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}
