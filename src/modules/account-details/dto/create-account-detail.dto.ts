import { IsString, IsOptional, IsBoolean, MinLength, IsUUID, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AccountDetailType } from '../entities/account-detail.entity';

export class CreateAccountDetailDto {
  @ApiProperty({ example: 'DET-CUST-001' })
  @IsString()
  @MinLength(2)
  code: string;

  @ApiProperty({ example: 'مشتری الف' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty()
  @IsUUID()
  accountId: string;

  @ApiProperty({ enum: AccountDetailType })
  @IsEnum(AccountDetailType)
  detailType: AccountDetailType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  referenceId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateAccountDetailDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  accountId?: string;

  @ApiPropertyOptional({ enum: AccountDetailType })
  @IsOptional()
  @IsEnum(AccountDetailType)
  detailType?: AccountDetailType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  referenceId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
