import {
  IsString,
  IsEnum,
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
import { DocumentType } from '../entities/inventory-document.entity';

export class CreateDocumentItemDto {
  @ApiProperty({ example: 'uuid-of-product' })
  @IsUUID()
  productId: string;

  @ApiProperty({ example: 10 })
  @IsInt()
  @Min(1)
  quantity: number;

  @ApiProperty({ example: 500000 })
  @IsInt()
  @Min(0)
  unitPrice: number;
}

export class CreateInventoryDocumentDto {
  @ApiProperty({ example: 'INV-DOC-001' })
  @IsString()
  @MinLength(1)
  documentNumber: string;

  @ApiProperty({ enum: DocumentType })
  @IsEnum(DocumentType)
  documentType: DocumentType;

  @ApiProperty({ example: 'uuid-of-warehouse' })
  @IsUUID()
  warehouseId: string;

  @ApiPropertyOptional({ example: 'uuid-of-target-warehouse' })
  @IsOptional()
  @IsUUID()
  targetWarehouseId?: string;

  @ApiProperty()
  @IsDateString()
  date: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: [CreateDocumentItemDto] })
  @ValidateNested({ each: true })
  @Type(() => CreateDocumentItemDto)
  @ArrayMinSize(1)
  items: CreateDocumentItemDto[];
}
