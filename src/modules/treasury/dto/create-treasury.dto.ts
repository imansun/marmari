import {
  IsString,
  IsEnum,
  IsOptional,
  IsNumber,
  IsBoolean,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TreasuryType } from '../entities/treasury.entity';

export class CreateTreasuryDto {
  @ApiProperty({ example: 'CASH-01' })
  @IsString()
  @MinLength(1)
  code: string;

  @ApiProperty({ example: 'صندوق اصلی' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ enum: TreasuryType })
  @IsEnum(TreasuryType)
  treasuryType: TreasuryType;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  balance?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
