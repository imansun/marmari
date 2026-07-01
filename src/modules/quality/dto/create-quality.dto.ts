import {
  IsString,
  IsEnum,
  IsOptional,
  IsArray,
  IsUUID,
  IsDateString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  QualityCheckType,
  QualityCheckStatus,
} from '../entities/quality-check.entity';
import { CheckResult } from '../entities/quality-check-item.entity';

export class CreateCheckItemDto {
  @ApiProperty({ example: 'وزن' })
  @IsString()
  parameter: string;

  @ApiProperty({ example: '1000g' })
  @IsString()
  expectedValue: string;

  @ApiProperty({ example: '998g' })
  @IsString()
  actualValue: string;

  @ApiProperty({ enum: CheckResult })
  @IsEnum(CheckResult)
  result: CheckResult;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}

export class CreateQualityCheckDto {
  @ApiProperty({ example: 'QC-001' })
  @IsString()
  @MinLength(1)
  code: string;

  @ApiProperty({ enum: QualityCheckType })
  @IsEnum(QualityCheckType)
  checkType: QualityCheckType;

  @ApiProperty({ example: 'purchase_order' })
  @IsString()
  referenceType: string;

  @ApiProperty()
  @IsUUID()
  referenceId: string;

  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  inspectorId?: string;

  @ApiProperty()
  @IsDateString()
  checkDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ type: [CreateCheckItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCheckItemDto)
  items: CreateCheckItemDto[];
}

export class UpdateQualityCheckDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(QualityCheckStatus)
  status?: QualityCheckStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional({ type: [CreateCheckItemDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCheckItemDto)
  items?: CreateCheckItemDto[];
}
