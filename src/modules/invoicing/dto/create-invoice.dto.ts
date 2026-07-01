import {
  IsString,
  IsEnum,
  IsDateString,
  IsUUID,
  IsOptional,
  ValidateNested,
  ArrayMinSize,
  IsNumber,
  Min,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { InvoiceType } from '../entities/invoice.entity';

export class CreateInvoiceItemDto {
  @ApiProperty({ example: 'uuid-of-product' })
  @IsUUID()
  productId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(1)
  quantity: number;

  @ApiProperty({ example: 100000 })
  @IsNumber()
  @Min(0)
  unitPrice: number;

  @ApiPropertyOptional({ example: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  discountPercent?: number;

  @ApiPropertyOptional({ example: 9 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  taxRate?: number;
}

export class CreateInvoiceDto {
  @ApiProperty({ example: 'INV-1404-001' })
  @IsString()
  @MinLength(1)
  invoiceNumber: string;

  @ApiProperty({ enum: InvoiceType })
  @IsEnum(InvoiceType)
  invoiceType: InvoiceType;

  @ApiProperty({ example: 'uuid-of-party' })
  @IsUUID()
  partyId: string;

  @ApiProperty()
  @IsDateString()
  date: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  dueDate?: Date;

  @ApiPropertyOptional({ example: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  discountAmount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: [CreateInvoiceItemDto] })
  @ValidateNested({ each: true })
  @Type(() => CreateInvoiceItemDto)
  @ArrayMinSize(1)
  items: CreateInvoiceItemDto[];
}

export class UpdateInvoiceDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  dueDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  discountAmount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;
}
