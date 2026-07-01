import { Entity, Column, OneToMany } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { FuelLog } from './fuel-log.entity';
import { MaintenanceLog } from './maintenance-log.entity';

export enum VehicleStatus {
  ACTIVE = 'active',
  MAINTENANCE = 'maintenance',
  OUT_OF_SERVICE = 'out_of_service',
  RETIRED = 'retired',
}

export enum VehicleType {
  TRUCK = 'truck',
  VAN = 'van',
  PICKUP = 'pickup',
  CAR = 'car',
  MOTORCYCLE = 'motorcycle',
  OTHER = 'other',
}

@Entity('vehicles')
export class Vehicle extends BaseEntity {
  @ApiProperty()
  @Column({ unique: true })
  code: string;

  @ApiProperty()
  @Column()
  plateNumber: string;

  @ApiProperty({ enum: VehicleType })
  @Column({ type: 'varchar', length: 20 })
  vehicleType: VehicleType;

  @ApiProperty()
  @Column()
  brand: string;

  @ApiProperty()
  @Column()
  model: string;

  @ApiProperty()
  @Column({ type: 'int' })
  year: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  capacity: number;

  @ApiProperty({ enum: VehicleStatus })
  @Column({ type: 'varchar', length: 20, default: VehicleStatus.ACTIVE })
  status: VehicleStatus;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  fuelType: string;

  @ApiPropertyOptional()
  @Column({ type: 'date', nullable: true })
  insuranceExpiry: Date;

  @ApiPropertyOptional()
  @Column({ type: 'date', nullable: true })
  inspectionExpiry: Date;

  @ApiPropertyOptional()
  @Column({ type: 'date', nullable: true })
  lastMaintenanceDate: Date;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  driverId: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  notes: string;

  @OneToMany(() => FuelLog, (f) => f.vehicle)
  fuelLogs: FuelLog[];

  @OneToMany(() => MaintenanceLog, (m) => m.vehicle)
  maintenanceLogs: MaintenanceLog[];
}
