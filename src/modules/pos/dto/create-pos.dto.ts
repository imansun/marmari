import {
  IsString,
  IsEnum,
  IsOptional,
  IsNumber,
  IsArray,
  IsUUID,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PaymentMethod } from '../entities/pos-payment.entity';

export class CreatePosSessionDto {
  @ApiProperty({ example: 'POS-S-001' })
  @IsString()
  @MinLength(1)
  code: string;

  @ApiProperty({ example: 'شیفت صبح' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ example: 'صندوق ۱' })
  @IsString()
  @MinLength(1)
  posName: string;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  openingBalance?: number;

  @ApiProperty()
  @IsUUID()
  openedById: string;
}

export class PosOrderItemDto {
  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiProperty({ example: 'محصول A' })
  @IsString()
  productName: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @Min(0.0001)
  quantity: number;

  @ApiProperty({ example: 100000 })
  @IsNumber()
  @Min(0)
  unitPrice: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  discount?: number;
}

export class CreatePosPaymentDto {
  @ApiProperty({ enum: PaymentMethod })
  @IsEnum(PaymentMethod)
  method: PaymentMethod;

  @ApiProperty({ example: 100000 })
  @IsNumber()
  @Min(1)
  amount: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  reference?: string;
}

export class CreatePosOrderDto {
  @ApiProperty()
  @IsUUID()
  sessionId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  partyId?: string;

  @ApiProperty({ type: [PosOrderItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PosOrderItemDto)
  items: PosOrderItemDto[];

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  discountTotal?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  taxTotal?: number;

  @ApiProperty({ type: [CreatePosPaymentDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePosPaymentDto)
  payments: CreatePosPaymentDto[];
}

export class ClosePosSessionDto {
  @ApiProperty()
  @IsUUID()
  closedById: string;

  @ApiPropertyOptional({ type: 'number' })
  @IsOptional()
  @IsNumber()
  declaredBalance?: number;
}
