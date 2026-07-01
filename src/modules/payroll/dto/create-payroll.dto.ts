import {
  IsString,
  IsEnum,
  IsOptional,
  IsNumber,
  IsArray,
  IsUUID,
  IsDateString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PayrollPeriodStatus } from '../entities/payroll-period.entity';

export class CreatePayrollItemDto {
  @ApiProperty()
  @IsUUID()
  employeeId: string;

  @ApiProperty({ example: 50000000 })
  @IsNumber()
  @Min(0)
  baseSalary: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  allowances?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  overtimePay?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  bonus?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  deductions?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  tax?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  insurance?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  loanDeduction?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}

export class CreatePayrollPeriodDto {
  @ApiProperty({ example: 'PAY-1405-01' })
  @IsString()
  @MinLength(1)
  code: string;

  @ApiProperty({ example: 'فروردین 1405' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty()
  @IsDateString()
  startDate: string;

  @ApiProperty()
  @IsDateString()
  endDate: string;

  @ApiProperty({ type: [CreatePayrollItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePayrollItemDto)
  items: CreatePayrollItemDto[];
}

export class UpdatePayrollPeriodDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(PayrollPeriodStatus)
  status?: PayrollPeriodStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;
}
