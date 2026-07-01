import {
  IsString,
  IsEnum,
  IsOptional,
  IsNumber,
  IsDateString,
  IsUUID,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { VehicleType } from '../entities/vehicle.entity';

export class CreateVehicleDto {
  @ApiProperty()
  @IsString()
  code: string;

  @ApiProperty()
  @IsString()
  plateNumber: string;

  @ApiProperty({ enum: VehicleType })
  @IsEnum(VehicleType)
  vehicleType: VehicleType;

  @ApiProperty()
  @IsString()
  brand: string;

  @ApiProperty()
  @IsString()
  model: string;

  @ApiProperty()
  @IsNumber()
  @Min(1900)
  year: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  capacity: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  fuelType?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  insuranceExpiry?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  inspectionExpiry?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  lastMaintenanceDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  driverId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}
