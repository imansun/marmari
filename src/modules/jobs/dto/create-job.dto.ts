import { IsString, IsObject, IsOptional, IsIn } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

const JOB_TYPES = [
  'send_email',
  'export_report',
  'process_webhook',
  'index_document',
  'cleanup_temp',
  'notify',
] as const;

export class CreateJobDto {
  @ApiProperty({ enum: JOB_TYPES, example: 'send_email' })
  @IsString()
  @IsIn(JOB_TYPES)
  type: string;

  @ApiProperty({ example: { to: 'user@example.com', subject: 'Hello' } })
  @IsObject()
  data: Record<string, unknown>;

  @ApiPropertyOptional({ example: 5000 })
  @IsOptional()
  @IsString()
  delay?: number;
}
