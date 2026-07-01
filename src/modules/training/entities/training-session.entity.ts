import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { TrainingCourse } from './training-course.entity';
import { TrainingAttendance } from './training-attendance.entity';

export enum SessionStatus {
  PLANNED = 'planned',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity('training_sessions', { schema: 'public' })
export class TrainingSession extends BaseEntity {
  @ManyToOne(() => TrainingCourse, { eager: true })
  @JoinColumn({ name: 'courseId' })
  course: TrainingCourse;

  @ApiProperty()
  @Column()
  courseId: string;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  startDate: Date;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  endDate: Date;

  @ApiPropertyOptional()
  @Column({ length: 200, nullable: true })
  instructor?: string;

  @ApiPropertyOptional()
  @Column({ length: 200, nullable: true })
  location?: string;

  @ApiProperty({ enum: SessionStatus, default: SessionStatus.PLANNED })
  @Column({ type: 'enum', enum: SessionStatus, default: SessionStatus.PLANNED })
  status: SessionStatus;

  @OneToMany(() => TrainingAttendance, (ta) => ta.session, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  attendees: TrainingAttendance[];
}
