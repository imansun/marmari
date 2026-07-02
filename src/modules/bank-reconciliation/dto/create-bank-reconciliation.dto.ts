import { IsString, IsOptional, IsNumber, IsUUID, IsDateString, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateBankReconciliationDto {
  @ApiProperty()
  @IsUUID()
  bankAccountId: string;

  @ApiProperty()
  @IsDateString()
  reconciliationDate: Date;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  statementBalance: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  bookBalance: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}

export class UpdateBankReconciliationDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  reconciliationDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  statementBalance?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  bookBalance?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}

export class ConfirmReconciliationDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}
