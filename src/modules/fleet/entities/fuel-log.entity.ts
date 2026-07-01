import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { Vehicle } from './vehicle.entity';

@Entity('fuel_logs')
export class FuelLog extends BaseEntity {
  @ApiProperty()
  @Column()
  vehicleId: string;

  @ApiProperty()
  @Column({ type: 'date' })
  date: Date;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 12, scale: 2 })
  cost: number;

  @ApiPropertyOptional()
  @Column({ type: 'int', nullable: true })
  odometer: number;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  station: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  notes: string;

  @ManyToOne(() => Vehicle, (v) => v.fuelLogs)
  @JoinColumn({ name: 'vehicleId' })
  vehicle: Vehicle;
}
