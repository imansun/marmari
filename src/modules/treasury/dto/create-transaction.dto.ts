import {
  IsString,
  IsNumber,
  IsDateString,
  IsUUID,
  IsOptional,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDepositDto {
  @ApiProperty({ example: 'uuid-of-treasury' })
  @IsUUID()
  treasuryId: string;

  @ApiProperty({ example: 5000000 })
  @IsNumber()
  @Min(1)
  amount: number;

  @ApiProperty()
  @IsDateString()
  date: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  referenceNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  partyId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  relatedEntityType?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  relatedEntityId?: string;
}

export class CreateWithdrawalDto {
  @ApiProperty({ example: 'uuid-of-treasury' })
  @IsUUID()
  treasuryId: string;

  @ApiProperty({ example: 3000000 })
  @IsNumber()
  @Min(1)
  amount: number;

  @ApiProperty()
  @IsDateString()
  date: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  referenceNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  partyId?: string;
}

export class CreateTransferDto {
  @ApiProperty({ example: 'uuid-of-source-treasury' })
  @IsUUID()
  fromTreasuryId: string;

  @ApiProperty({ example: 'uuid-of-target-treasury' })
  @IsUUID()
  toTreasuryId: string;

  @ApiProperty({ example: 2000000 })
  @IsNumber()
  @Min(1)
  amount: number;

  @ApiProperty()
  @IsDateString()
  date: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  referenceNumber?: string;
}
