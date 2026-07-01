import { Entity, Column, Index, Unique } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum AttendanceStatus {
  PRESENT = 'present',
  ABSENT = 'absent',
  LATE = 'late',
  HALF_DAY = 'half_day',
  LEAVE = 'leave',
  OVERTIME = 'overtime',
}

@Entity('attendance_records', { schema: 'public' })
@Unique(['employeeId', 'date'])
export class AttendanceRecord extends BaseEntity {
  @ApiProperty()
  @Column()
  @Index()
  employeeId: string;

  @ApiProperty()
  @Column({ type: 'date' })
  @Index()
  date: string;

  @ApiPropertyOptional()
  @Column({ type: 'time', nullable: true })
  checkIn?: string;

  @ApiPropertyOptional()
  @Column({ type: 'time', nullable: true })
  checkOut?: string;

  @ApiProperty({ enum: AttendanceStatus, default: AttendanceStatus.PRESENT })
  @Column({
    type: 'enum',
    enum: AttendanceStatus,
    default: AttendanceStatus.PRESENT,
  })
  status: AttendanceStatus;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  hoursWorked: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  overtimeHours: number;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  notes?: string;
}
