import {
  IsString,
  IsEnum,
  IsNumber,
  IsDateString,
  IsUUID,
  IsOptional,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ChequeDirection, ChequeStatus } from '../entities/cheque.entity';

export class CreateChequeDto {
  @ApiProperty({ example: 'CHK-001' })
  @IsString()
  @MinLength(1)
  chequeNumber: string;

  @ApiProperty({ enum: ChequeDirection })
  @IsEnum(ChequeDirection)
  direction: ChequeDirection;

  @ApiProperty({ example: 'uuid-of-bank-account' })
  @IsUUID()
  bankAccountId: string;

  @ApiProperty({ example: 5000000 })
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsDateString()
  issueDate: Date;

  @ApiProperty()
  @IsDateString()
  dueDate: Date;

  @ApiProperty({ example: 'شرکت پرداخت کننده' })
  @IsString()
  @MinLength(2)
  payerName: string;

  @ApiProperty({ example: 'شرکت دریافت کننده' })
  @IsString()
  @MinLength(2)
  payeeName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ enum: ChequeStatus, default: ChequeStatus.ISSUED })
  @IsOptional()
  @IsEnum(ChequeStatus)
  status?: ChequeStatus;
}

export class UpdateChequeDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  amount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  dueDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;
}
