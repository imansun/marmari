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
import { ContractType, ContractStatus } from '../entities/contract.entity';

export class CreateContractItemDto {
  @ApiPropertyOptional({ example: 'uuid-of-product' })
  @IsOptional()
  @IsUUID()
  productId?: string;

  @ApiProperty({ example: 'مشاوره نرم‌افزاری' })
  @IsString()
  @MinLength(2)
  description: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @Min(0)
  quantity: number;

  @ApiProperty({ example: 50000000 })
  @IsNumber()
  @Min(0)
  unitPrice: number;
}

export class CreateContractDto {
  @ApiProperty({ example: 'CT-1404-001' })
  @IsString()
  @MinLength(1)
  contractNumber: string;

  @ApiProperty({ example: 'قرارداد خرید تجهیزات' })
  @IsString()
  @MinLength(2)
  title: string;

  @ApiProperty({ enum: ContractType, default: ContractType.PURCHASE })
  @IsEnum(ContractType)
  contractType: ContractType;

  @ApiProperty({ example: 'uuid-of-party' })
  @IsUUID()
  partyId: string;

  @ApiProperty()
  @IsDateString()
  startDate: Date;

  @ApiProperty()
  @IsDateString()
  endDate: Date;

  @ApiProperty({ example: 50000000 })
  @IsNumber()
  @Min(0)
  amount: number;

  @ApiPropertyOptional({ enum: ContractStatus, default: ContractStatus.DRAFT })
  @IsOptional()
  @IsEnum(ContractStatus)
  status?: ContractStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  terms?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: [CreateContractItemDto] })
  @ValidateNested({ each: true })
  @Type(() => CreateContractItemDto)
  @ArrayMinSize(1)
  items: CreateContractItemDto[];
}

export class UpdateContractDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  endDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  amount?: number;

  @ApiPropertyOptional({ enum: ContractStatus })
  @IsOptional()
  @IsEnum(ContractStatus)
  status?: ContractStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  terms?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;
}
