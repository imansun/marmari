import {
  IsString,
  IsNumber,
  IsEnum,
  IsOptional,
  IsUUID,
  Min,
  MinLength,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BudgetStatus } from '../entities/budget.entity';

export class CreateBudgetItemDto {
  @ApiProperty({ example: 5000000 })
  @IsNumber()
  @Min(0)
  allocatedAmount: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  note?: string;
}

export class CreateBudgetDto {
  @ApiProperty({ example: 'BUD-1404' })
  @IsString()
  @MinLength(1)
  code: string;

  @ApiProperty({ example: 'بودجه سال 1404' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ example: '1404' })
  @IsString()
  @MinLength(4)
  fiscalYear: string;

  @ApiProperty({ example: 500000000 })
  @IsNumber()
  @Min(0)
  totalAmount: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  costCenterId?: string;

  @ApiPropertyOptional({ enum: BudgetStatus, default: BudgetStatus.DRAFT })
  @IsOptional()
  @IsEnum(BudgetStatus)
  status?: BudgetStatus;

  @ApiProperty({ type: [CreateBudgetItemDto] })
  @ValidateNested({ each: true })
  @Type(() => CreateBudgetItemDto)
  @ArrayMinSize(1)
  items: CreateBudgetItemDto[];
}

export class UpdateBudgetDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  totalAmount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  costCenterId?: string;

  @ApiPropertyOptional({ enum: BudgetStatus })
  @IsOptional()
  @IsEnum(BudgetStatus)
  status?: BudgetStatus;
}
