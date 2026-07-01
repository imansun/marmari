import {
  IsString,
  IsEnum,
  IsOptional,
  IsDateString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { VisitType, VisitStatus } from '../entities/visit.entity';

export class CreateVisitDto {
  @ApiProperty({ example: 'VIS-001' })
  @IsString()
  @MinLength(1)
  code: string;

  @ApiProperty()
  @IsUUID()
  partyId: string;

  @ApiProperty()
  @IsDateString()
  date: string;

  @ApiProperty({ enum: VisitType })
  @IsEnum(VisitType)
  visitType: VisitType;

  @ApiPropertyOptional({ default: VisitStatus.SCHEDULED })
  @IsOptional()
  @IsEnum(VisitStatus)
  status?: VisitStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  result?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  userId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  followUpDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  campaignId?: string;
}

export class UpdateVisitDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(VisitStatus)
  status?: VisitStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  result?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  followUpDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  orderId?: string;
}
