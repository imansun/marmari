import { IsEnum, IsDateString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TransportStatus } from '../entities/transport.entity';

export class UpdateTransportDto {
  @ApiProperty({ enum: TransportStatus })
  @IsEnum(TransportStatus)
  status: TransportStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  actualDeparture?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  actualArrival?: string;
}
