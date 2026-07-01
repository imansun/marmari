import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { VehicleStatus } from '../entities/vehicle.entity';

export class UpdateVehicleStatusDto {
  @ApiProperty({ enum: VehicleStatus })
  @IsEnum(VehicleStatus)
  status: VehicleStatus;
}
