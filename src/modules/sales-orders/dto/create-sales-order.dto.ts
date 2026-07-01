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

export class CreateSalesOrderItemDto {
  @ApiProperty({ example: 'uuid-of-product' })
  @IsUUID()
  productId: string;

  @ApiProperty({ example: 10 })
  @IsInt()
  @Min(1)
  quantity: number;

  @ApiProperty({ example: 150000 })
  @IsInt()
  @Min(0)
  unitPrice: number;
}

export class CreateSalesOrderDto {
  @ApiProperty({ example: 'SO-1404-001' })
  @IsString()
  @MinLength(1)
  orderNumber: string;

  @ApiProperty({ example: 'uuid-of-customer-party' })
  @IsUUID()
  customerId: string;

  @ApiProperty({ example: 'uuid-of-warehouse' })
  @IsUUID()
  warehouseId: string;

  @ApiProperty()
  @IsDateString()
  orderDate: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  deliveryDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: [CreateSalesOrderItemDto] })
  @ValidateNested({ each: true })
  @Type(() => CreateSalesOrderItemDto)
  @ArrayMinSize(1)
  items: CreateSalesOrderItemDto[];
}

export class UpdateSalesOrderDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  deliveryDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;
}
