import {
  IsString,
  IsEnum,
  IsOptional,
  IsNumber,
  IsDateString,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TransportType } from '../entities/transport.entity';

export class CreateTransportDto {
  @ApiProperty()
  @IsString()
  code: string;

  @ApiProperty({ enum: TransportType })
  @IsEnum(TransportType)
  transportType: TransportType;

  @ApiProperty()
  @IsString()
  carrierName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  driverName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  driverPhone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  vehiclePlate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  vehicleType?: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  capacity: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  cost: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  estimatedDeparture?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  estimatedArrival?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  actualDeparture?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  actualArrival?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  referenceType?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  referenceId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}
