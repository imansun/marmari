import {
  IsString,
  IsOptional,
  IsEnum,
  MinLength,
  IsEmail,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PartyType, PartyRole, PartyStatus } from '../entities/party.entity';

export class CreatePartyDto {
  @ApiProperty({ example: 'C001' })
  @IsString()
  @MinLength(1)
  code: string;

  @ApiProperty({ example: 'شرکت نمونه' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiPropertyOptional({ enum: PartyType, default: PartyType.PERSON })
  @IsOptional()
  @IsEnum(PartyType)
  partyType?: PartyType;

  @ApiPropertyOptional({ enum: PartyRole, default: PartyRole.CUSTOMER })
  @IsOptional()
  @IsEnum(PartyRole)
  role?: PartyRole;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  nationalId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  economicCode?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  mobile?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  address?: string;
}

export class UpdatePartyDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ enum: PartyRole })
  @IsOptional()
  @IsEnum(PartyRole)
  role?: PartyRole;

  @ApiPropertyOptional({ enum: PartyStatus })
  @IsOptional()
  @IsEnum(PartyStatus)
  status?: PartyStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  mobile?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  address?: string;
}
