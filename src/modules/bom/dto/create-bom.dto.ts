import {
  IsString,
  IsNumber,
  IsEnum,
  IsOptional,
  IsArray,
  IsUUID,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BOMStatus } from '../entities/bom.entity';

export class CreateBomItemDto {
  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @Min(0.0001)
  quantity: number;

  @ApiProperty({ example: 'عدد' })
  @IsString()
  @MinLength(1)
  unit: string;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  wastePercent?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  sortOrder?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;
}

export class CreateBomDto {
  @ApiProperty({ example: 'BOM-001' })
  @IsString()
  @MinLength(1)
  code: string;

  @ApiProperty({ example: 'محصول A' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @IsNumber()
  @Min(0.0001)
  quantity?: number;

  @ApiProperty({ example: 'عدد' })
  @IsString()
  @MinLength(1)
  unit: string;

  @ApiPropertyOptional({ default: BOMStatus.DRAFT })
  @IsOptional()
  @IsEnum(BOMStatus)
  status?: BOMStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: [CreateBomItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBomItemDto)
  items: CreateBomItemDto[];
}

export class UpdateBomDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(BOMStatus)
  status?: BOMStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBomItemDto)
  items?: CreateBomItemDto[];
}
