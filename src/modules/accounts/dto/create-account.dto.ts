import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  MinLength,
  IsUUID,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AccountStatus, AccountEffectScope } from '../entities/account.entity';

export class CreateAccountDto {
  @ApiProperty({ example: '1101' })
  @IsString()
  @MinLength(2)
  code: string;

  @ApiProperty({ example: 'صندوق' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ example: 'uuid-of-account-type' })
  @IsUUID()
  accountTypeId: string;

  @ApiPropertyOptional({ example: 'صندوق نقد' })
  @IsOptional()
  @IsString()
  secondTitle?: string;

  @ApiPropertyOptional({
    enum: AccountEffectScope,
    default: AccountEffectScope.BOTH,
  })
  @IsOptional()
  @IsEnum(AccountEffectScope)
  effectScope?: AccountEffectScope;

  @ApiPropertyOptional({ enum: AccountStatus, default: AccountStatus.ACTIVE })
  @IsOptional()
  @IsEnum(AccountStatus)
  status?: AccountStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  debitBalance?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  creditBalance?: number;
}

export class UpdateAccountDto {
  @ApiPropertyOptional({ example: 'صندوق نقد' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  accountTypeId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  secondTitle?: string;

  @ApiPropertyOptional({ enum: AccountEffectScope })
  @IsOptional()
  @IsEnum(AccountEffectScope)
  effectScope?: AccountEffectScope;

  @ApiPropertyOptional({ enum: AccountStatus })
  @IsOptional()
  @IsEnum(AccountStatus)
  status?: AccountStatus;
}
