import {
  IsString,
  IsEnum,
  IsOptional,
  IsArray,
  IsObject,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  ReportCategory,
  ReportType,
} from '../entities/report-definition.entity';

export class CreateReportDefinitionDto {
  @ApiProperty()
  @IsString()
  code: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ enum: ReportCategory })
  @IsEnum(ReportCategory)
  category: ReportCategory;

  @ApiPropertyOptional({ enum: ReportType })
  @IsOptional()
  @IsEnum(ReportType)
  reportType?: ReportType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  query?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  parameters?: Record<string, unknown>[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  columns?: Record<string, unknown>[];
}

export class ExecuteReportDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsObject()
  parameters?: Record<string, unknown>;
}
