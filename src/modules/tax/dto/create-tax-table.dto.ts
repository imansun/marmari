import { IsString, IsOptional, IsBoolean, IsArray, ValidateNested, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

class TaxTableItemDto {
  @ApiProperty({ example: 9 })
  @IsString()
  rate: number;

  @ApiPropertyOptional({ example: 0 })
  @IsOptional()
  @IsString()
  minAmount?: number;

  @ApiPropertyOptional({ example: 100000000 })
  @IsOptional()
  @IsString()
  maxAmount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;
}

export class CreateTaxTableDto {
  @ApiProperty({ example: 'VAT-STANDARD' })
  @IsString()
  @MinLength(2)
  code: string;

  @ApiProperty({ example: 'مالیات بر ارزش افزوده استاندارد' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ example: '2026-01-01' })
  @IsString()
  effectiveFrom: string;

  @ApiPropertyOptional({ example: '2026-12-31' })
  @IsOptional()
  @IsString()
  effectiveTo?: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ type: [TaxTableItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TaxTableItemDto)
  items: TaxTableItemDto[];
}

export class UpdateTaxTableDto {
  @ApiPropertyOptional({ example: 'مالیات بر ارزش افزوده استاندارد' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  effectiveFrom?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  effectiveTo?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
