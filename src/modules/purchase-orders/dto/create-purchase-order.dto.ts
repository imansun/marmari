import {
  IsString,
  IsDateString,
  IsUUID,
  IsOptional,
  ValidateNested,
  ArrayMinSize,
  IsInt,
  Min,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePurchaseOrderItemDto {
  @ApiProperty({ example: 'uuid-of-product' })
  @IsUUID()
  productId: string;

  @ApiProperty({ example: 100 })
  @IsInt()
  @Min(1)
  quantity: number;

  @ApiProperty({ example: 50000 })
  @IsInt()
  @Min(0)
  unitPrice: number;
}

export class CreatePurchaseOrderDto {
  @ApiProperty({ example: 'PO-1404-001' })
  @IsString()
  @MinLength(1)
  orderNumber: string;

  @ApiProperty({ example: 'uuid-of-supplier-party' })
  @IsUUID()
  supplierId: string;

  @ApiProperty({ example: 'uuid-of-warehouse' })
  @IsUUID()
  warehouseId: string;

  @ApiProperty()
  @IsDateString()
  orderDate: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  expectedDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: [CreatePurchaseOrderItemDto] })
  @ValidateNested({ each: true })
  @Type(() => CreatePurchaseOrderItemDto)
  @ArrayMinSize(1)
  items: CreatePurchaseOrderItemDto[];
}

export class UpdatePurchaseOrderDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  expectedDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;
}
