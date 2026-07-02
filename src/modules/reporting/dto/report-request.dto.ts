import { IsString, IsOptional, IsDateString, IsIn } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ReportRequestDto {
  @ApiProperty({
    enum: ['financial', 'inventory', 'invoicing', 'hr'],
    example: 'financial',
  })
  @IsString()
  @IsIn(['financial', 'inventory', 'invoicing', 'hr'])
  reportType: string;

  @ApiProperty({ example: 'trial-balance' })
  @IsString()
  reportName: string;

  @ApiPropertyOptional({ example: '2026-01-01' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ example: '2026-12-31' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  entityId?: string;

  @ApiPropertyOptional({ enum: ['pdf', 'csv', 'json'], default: 'json' })
  @IsOptional()
  @IsString()
  @IsIn(['pdf', 'csv', 'json'])
  format?: string;
}
