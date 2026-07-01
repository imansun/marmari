import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { TrainingSession } from './training-session.entity';

export enum AttendeeStatus {
  REGISTERED = 'registered',
  ATTENDED = 'attended',
  ABSENT = 'absent',
}

@Entity('training_attendances', { schema: 'public' })
export class TrainingAttendance extends BaseEntity {
  @ManyToOne(() => TrainingSession, (ts) => ts.attendees, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'sessionId' })
  session: TrainingSession;

  @ApiProperty()
  @Column()
  sessionId: string;

  @ApiProperty()
  @Column()
  employeeId: string;

  @ApiProperty({ enum: AttendeeStatus, default: AttendeeStatus.REGISTERED })
  @Column({
    type: 'enum',
    enum: AttendeeStatus,
    default: AttendeeStatus.REGISTERED,
  })
  status: AttendeeStatus;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  score?: number;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  feedback?: string;
}
