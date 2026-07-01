import {
  IsString,
  IsDateString,
  IsOptional,
  ValidateNested,
  ArrayMinSize,
  IsNumber,
  Min,
  MinLength,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePriceListItemDto {
  @ApiProperty({ example: 'uuid-of-product' })
  @IsString()
  productId: string;

  @ApiProperty({ example: 150000 })
  @IsNumber()
  @Min(0)
  unitPrice: number;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  discountPercent?: number;

  @ApiPropertyOptional({ example: 15000 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  discountAmount?: number;
}

export class CreatePriceListDto {
  @ApiProperty({ example: 'PL-WHOLESALE' })
  @IsString()
  @MinLength(1)
  code: string;

  @ApiProperty({ example: 'قیمت عمده' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ default: 'IRR' })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty()
  @IsDateString()
  effectiveFrom: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  effectiveTo?: Date;

  @ApiProperty({ type: [CreatePriceListItemDto] })
  @ValidateNested({ each: true })
  @Type(() => CreatePriceListItemDto)
  @ArrayMinSize(1)
  items: CreatePriceListItemDto[];
}

export class UpdatePriceListDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  effectiveTo?: Date;
}
