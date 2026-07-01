import { IsString, IsOptional, IsBoolean, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateWarehouseDto {
  @ApiProperty({ example: 'WH-MAIN' })
  @IsString()
  @MinLength(1)
  code: string;

  @ApiProperty({ example: 'انبار مرکزی' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiPropertyOptional({ example: 'تهران، خیابان ...' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ example: '02112345678' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
