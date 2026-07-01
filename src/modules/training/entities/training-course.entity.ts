import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum CourseType {
  INTERNAL = 'internal',
  EXTERNAL = 'external',
  ONLINE = 'online',
}

@Entity('training_courses', { schema: 'public' })
export class TrainingCourse extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  title: string;

  @ApiProperty({ enum: CourseType })
  @Column({ type: 'enum', enum: CourseType })
  courseType: CourseType;

  @ApiPropertyOptional()
  @Column({ length: 1000, nullable: true })
  description?: string;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 5, scale: 1, nullable: true })
  duration?: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  cost: number;

  @ApiPropertyOptional()
  @Column({ length: 200, nullable: true })
  provider?: string;

  @ApiProperty({ default: true })
  @Column({ default: true })
  isActive: boolean;
}
