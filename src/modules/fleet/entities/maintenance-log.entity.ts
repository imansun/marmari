import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { Vehicle } from './vehicle.entity';

@Entity('maintenance_logs')
export class MaintenanceLog extends BaseEntity {
  @ApiProperty()
  @Column()
  vehicleId: string;

  @ApiProperty()
  @Column({ type: 'date' })
  date: Date;

  @ApiProperty()
  @Column()
  type: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  description: string;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 12, scale: 2 })
  cost: number;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  provider: string;

  @ApiPropertyOptional()
  @Column({ type: 'date', nullable: true })
  nextServiceDate: Date;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  notes: string;

  @ManyToOne(() => Vehicle, (v) => v.maintenanceLogs)
  @JoinColumn({ name: 'vehicleId' })
  vehicle: Vehicle;
}
