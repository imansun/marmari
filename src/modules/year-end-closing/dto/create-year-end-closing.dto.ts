import { IsString, IsOptional, IsUUID, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateYearEndClosingDto {
  @ApiProperty()
  @IsUUID()
  fiscalYearId: string;

  @ApiProperty()
  @IsDateString()
  closingDate: Date;

  @ApiProperty()
  @IsUUID()
  closedBy: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}

export class ExecuteClosingDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}

export class ReverseClosingDto {
  @ApiProperty()
  @IsString()
  reason: string;
}
