import { Entity, Column } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum TransportType {
  ROAD = 'road',
  AIR = 'air',
  SEA = 'sea',
  RAIL = 'rail',
}

export enum TransportStatus {
  PLANNED = 'planned',
  IN_TRANSIT = 'in_transit',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
}

@Entity('transports')
export class Transport extends BaseEntity {
  @ApiProperty()
  @Column({ unique: true })
  code: string;

  @ApiProperty({ enum: TransportType })
  @Column({ type: 'varchar', length: 10 })
  transportType: TransportType;

  @ApiProperty()
  @Column()
  carrierName: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  driverName: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  driverPhone: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  vehiclePlate: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  vehicleType: string;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  capacity: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 12, scale: 2 })
  cost: number;

  @ApiProperty({ enum: TransportStatus })
  @Column({ type: 'varchar', length: 15, default: TransportStatus.PLANNED })
  status: TransportStatus;

  @ApiPropertyOptional()
  @Column({ type: 'timestamp', nullable: true })
  estimatedDeparture: Date;

  @ApiPropertyOptional()
  @Column({ type: 'timestamp', nullable: true })
  estimatedArrival: Date;

  @ApiPropertyOptional()
  @Column({ type: 'timestamp', nullable: true })
  actualDeparture: Date;

  @ApiPropertyOptional()
  @Column({ type: 'timestamp', nullable: true })
  actualArrival: Date;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  referenceType: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  referenceId: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  notes: string;
}
