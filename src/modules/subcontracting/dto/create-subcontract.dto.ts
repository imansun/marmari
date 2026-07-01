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
  SubcontractOrderType,
  SubcontractOrderStatus,
} from '../entities/subcontract-order.entity';

class CreateSubcontractItemDto {
  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(0.0001)
  quantity: number;

  @ApiProperty({ example: 500000 })
  @IsNumber()
  @Min(0)
  unitPrice: number;
}

class CreateSubcontractMaterialDto {
  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 50 })
  @IsNumber()
  @Min(0.0001)
  quantitySent: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  unitPrice?: number;
}

export class CreateSubcontractOrderDto {
  @ApiProperty({ example: 'SUB-001' })
  @IsString()
  @MinLength(1)
  code: string;

  @ApiProperty()
  @IsUUID()
  partyId: string;

  @ApiProperty({ enum: SubcontractOrderType })
  @IsEnum(SubcontractOrderType)
  orderType: SubcontractOrderType;

  @ApiProperty()
  @IsDateString()
  startDate: string;

  @ApiProperty()
  @IsDateString()
  endDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(SubcontractOrderStatus)
  status?: SubcontractOrderStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  termsConditions?: string;

  @ApiProperty({ type: [CreateSubcontractItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSubcontractItemDto)
  items: CreateSubcontractItemDto[];

  @ApiProperty({ type: [CreateSubcontractMaterialDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSubcontractMaterialDto)
  materials: CreateSubcontractMaterialDto[];
}

export class UpdateSubcontractOrderDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(SubcontractOrderStatus)
  status?: SubcontractOrderStatus;

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
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  termsConditions?: string;
}

export class ReceiveSubcontractItemDto {
  @ApiProperty()
  @IsUUID()
  itemId: string;

  @ApiProperty({ example: 5 })
  @IsNumber()
  @Min(0.0001)
  receivedQuantity: number;
}

export class ReturnMaterialDto {
  @ApiProperty()
  @IsUUID()
  materialId: string;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(0)
  quantityReturned: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  quantityWasted?: number;
}
