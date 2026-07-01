import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

@Entity('departments', { schema: 'public' })
export class Department extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ManyToOne(() => Department, { nullable: true })
  @JoinColumn({ name: 'parentId' })
  parent?: Department;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  parentId?: string;

  @ApiProperty({ default: true })
  @Column({ default: true })
  isActive: boolean;
}
