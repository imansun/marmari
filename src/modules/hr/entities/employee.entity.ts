import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { Department } from './department.entity';

export enum EmployeeStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  TERMINATED = 'terminated',
}

export enum EmploymentType {
  FULL_TIME = 'full_time',
  PART_TIME = 'part_time',
  CONTRACT = 'contract',
  INTERN = 'intern',
}

@Entity('employees', { schema: 'public' })
export class Employee extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  employeeNumber: string;

  @ApiProperty()
  @Column({ length: 100 })
  firstName: string;

  @ApiProperty()
  @Column({ length: 100 })
  lastName: string;

  @ApiProperty()
  @Column({ length: 20, unique: true })
  @Index()
  nationalId: string;

  @ApiPropertyOptional()
  @Column({ length: 100, nullable: true })
  email?: string;

  @ApiPropertyOptional()
  @Column({ length: 50, nullable: true })
  phone?: string;

  @ApiPropertyOptional()
  @Column({ length: 50, nullable: true })
  mobile?: string;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  hireDate: Date;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  terminationDate?: Date;

  @ApiProperty()
  @Column({ length: 200 })
  position: string;

  @ManyToOne(() => Department, { eager: true })
  @JoinColumn({ name: 'departmentId' })
  department: Department;

  @ApiProperty()
  @Column()
  departmentId: string;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  baseSalary: number;

  @ApiProperty({ enum: EmploymentType, default: EmploymentType.FULL_TIME })
  @Column({
    type: 'enum',
    enum: EmploymentType,
    default: EmploymentType.FULL_TIME,
  })
  employmentType: EmploymentType;

  @ApiProperty({ enum: EmployeeStatus, default: EmployeeStatus.ACTIVE })
  @Column({
    type: 'enum',
    enum: EmployeeStatus,
    default: EmployeeStatus.ACTIVE,
  })
  status: EmployeeStatus;
}
