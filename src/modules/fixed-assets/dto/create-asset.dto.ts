import {
  IsString,
  IsEnum,
  IsDateString,
  IsUUID,
  IsOptional,
  IsNumber,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AssetStatus, DepreciationMethod } from '../entities/asset.entity';

export class CreateAssetDto {
  @ApiProperty({ example: 'AST-001' })
  @IsString()
  @MinLength(1)
  code: string;

  @ApiProperty({ example: 'دستگاه حفاری' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'uuid-of-category' })
  @IsUUID()
  categoryId: string;

  @ApiProperty()
  @IsDateString()
  purchaseDate: Date;

  @ApiProperty({ example: 500000000 })
  @IsNumber()
  @Min(0)
  purchasePrice: number;

  @ApiPropertyOptional({ example: 50000000 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  salvageValue?: number;

  @ApiPropertyOptional({ example: 60 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  usefulLife?: number;

  @ApiPropertyOptional({
    enum: DepreciationMethod,
    default: DepreciationMethod.STRAIGHT_LINE,
  })
  @IsOptional()
  @IsEnum(DepreciationMethod)
  depreciationMethod?: DepreciationMethod;

  @ApiPropertyOptional({ enum: AssetStatus, default: AssetStatus.ACTIVE })
  @IsOptional()
  @IsEnum(AssetStatus)
  status?: AssetStatus;
}

export class UpdateAssetDto {
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
  @IsNumber()
  salvageValue?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  usefulLife?: number;
}
