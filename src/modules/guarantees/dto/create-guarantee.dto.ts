import { IsString, IsOptional, IsNumber, IsUUID, IsDateString, IsEnum, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GuaranteeType, GuaranteeStatus } from '../entities/guarantee.entity';

export class CreateGuaranteeDto {
  @ApiProperty({ example: 'G-001' })
  @IsString()
  @Min(2)
  code: string;

  @ApiProperty({ enum: GuaranteeType })
  @IsEnum(GuaranteeType)
  type: GuaranteeType;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  amount: number;

  @ApiProperty()
  @IsDateString()
  issueDate: Date;

  @ApiProperty()
  @IsDateString()
  expiryDate: Date;

  @ApiProperty()
  @IsString()
  beneficiary: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  bankId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsEnum(GuaranteeStatus)
  status?: GuaranteeStatus;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  isActive?: boolean;
}

export class UpdateGuaranteeDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(GuaranteeType)
  type?: GuaranteeType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  issueDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  expiryDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  beneficiary?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  bankId?: string;

  @ApiPropertyOptional({ enum: GuaranteeStatus })
  @IsOptional()
  @IsEnum(GuaranteeStatus)
  status?: GuaranteeStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  isActive?: boolean;
}
