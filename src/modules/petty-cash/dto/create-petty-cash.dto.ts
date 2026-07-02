import { IsString, IsOptional, IsBoolean, IsNumber, MinLength, IsUUID, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePettyCashDto {
  @ApiProperty({ example: 'PC-OFFICE' })
  @IsString()
  @MinLength(2)
  code: string;

  @ApiProperty({ example: 'صندوق دفتری' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ example: 'علی رضایی' })
  @IsString()
  custodian: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  treasuryId?: string;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  balance?: number;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdatePettyCashDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  custodian?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  treasuryId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class TransactionDto {
  @ApiProperty()
  @IsNumber()
  @Min(0.01)
  amount: number;

  @ApiProperty({ example: 'مصارف اداری' })
  @IsString()
  description: string;
}
