import {
  IsString,
  IsNumber,
  IsDateString,
  IsUUID,
  IsOptional,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTransferDto {
  @ApiProperty({ example: 'TRF-001' })
  @IsString()
  @MinLength(1)
  referenceNumber: string;

  @ApiProperty({ example: 'uuid-of-source-account' })
  @IsUUID()
  fromAccountId: string;

  @ApiProperty({ example: 'uuid-of-destination-account' })
  @IsUUID()
  toAccountId: string;

  @ApiProperty({ example: 10000000 })
  @IsNumber()
  @Min(1)
  amount: number;

  @ApiProperty()
  @IsDateString()
  transferDate: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;
}
