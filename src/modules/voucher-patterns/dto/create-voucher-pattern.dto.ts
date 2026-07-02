import { IsString, IsOptional, IsBoolean, MinLength, IsUUID, IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PatternItemDto {
  @ApiProperty()
  @IsUUID()
  accountId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  debitFormula?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  creditFormula?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  sortOrder?: number;
}

export class CreateVoucherPatternDto {
  @ApiProperty({ example: 'VP-PURCHASE' })
  @IsString()
  @MinLength(2)
  code: string;

  @ApiProperty({ example: 'الگوی خرید' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty()
  @IsUUID()
  voucherTypeId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ type: [PatternItemDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PatternItemDto)
  items?: PatternItemDto[];
}

export class UpdateVoucherPatternDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  voucherTypeId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ type: [PatternItemDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PatternItemDto)
  items?: PatternItemDto[];
}
