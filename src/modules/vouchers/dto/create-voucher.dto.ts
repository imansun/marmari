import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsArray,
  ValidateNested,
  IsUUID,
  Min,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { VoucherState } from '../entities/voucher.entity';

export class CreateVoucherItemDto {
  @ApiProperty()
  @IsNumber()
  @Min(1)
  rowNumber: number;

  @ApiProperty()
  @IsUUID()
  accountId: string;

  @ApiProperty()
  @IsNumber()
  debit: number;

  @ApiProperty()
  @IsNumber()
  credit: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  followUpNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  followUpDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  quantity?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  partyId?: string;
}

export class CreateVoucherDto {
  @ApiProperty()
  @IsNumber()
  @Min(1)
  dailyNumber: number;

  @ApiProperty()
  @IsDateString()
  date: string;

  @ApiProperty()
  @IsUUID()
  voucherTypeId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  auxiliaryNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ enum: VoucherState, default: VoucherState.DRAFT })
  @IsOptional()
  @IsEnum(VoucherState)
  state?: VoucherState;

  @ApiProperty({ type: [CreateVoucherItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateVoucherItemDto)
  items: CreateVoucherItemDto[];
}
