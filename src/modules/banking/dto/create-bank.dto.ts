import { IsString, IsOptional, IsEnum, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BankType } from '../entities/bank.entity';

export class CreateBankDto {
  @ApiProperty({ example: 'بانک ملی ایران' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ example: '010' })
  @IsString()
  @MinLength(2)
  code: string;

  @ApiPropertyOptional({ example: 'BKMT' })
  @IsOptional()
  @IsString()
  swiftCode?: string;

  @ApiPropertyOptional({ enum: BankType, default: BankType.COMMERCIAL })
  @IsOptional()
  @IsEnum(BankType)
  bankType?: BankType;
}
