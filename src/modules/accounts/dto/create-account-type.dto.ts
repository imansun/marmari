import { IsString, IsEnum, IsOptional, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AccountCategory } from '../entities/account-type.entity';

export class CreateAccountTypeDto {
  @ApiProperty({ example: 'asset' })
  @IsString()
  @MinLength(2)
  code: string;

  @ApiProperty({ example: 'دارایی‌ها' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ enum: AccountCategory })
  @IsEnum(AccountCategory)
  categoryType: AccountCategory;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  isCreditable?: boolean;
}
