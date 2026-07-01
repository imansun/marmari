import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCurrencyDto {
  @ApiProperty({ example: 'USD' })
  @IsString()
  @MinLength(3)
  code: string;

  @ApiProperty({ example: 'دلار آمریکا' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ example: '$' })
  @IsString()
  @MinLength(1)
  symbol: string;

  @ApiPropertyOptional({ example: 420000 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  exchangeRate?: number;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  isBase?: boolean;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateCurrencyDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  exchangeRate?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isBase?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class CreateCurrencyRateDto {
  @ApiProperty({ example: 'uuid-of-currency' })
  @IsString()
  currencyId: string;

  @ApiProperty({ example: 425000 })
  @IsNumber()
  @Min(0)
  rate: number;

  @ApiProperty()
  @IsString()
  date: string;

  @ApiPropertyOptional({ example: 'بانک مرکزی' })
  @IsOptional()
  @IsString()
  source?: string;
}
