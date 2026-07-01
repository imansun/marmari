import { Entity, Column, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  FINANCE = 'finance',
  SALES = 'sales',
  INVENTORY = 'inventory',
  HR = 'hr',
  USER = 'user',
}

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  LOCKED = 'locked',
}

@Entity('users')
export class User extends BaseEntity {
  @ApiProperty()
  @Column({ length: 100, unique: true })
  @Index()
  username: string;

  @ApiProperty()
  @Column({ length: 255, unique: true })
  @Index()
  email: string;

  @Column({ length: 255, select: false })
  password: string;

  @ApiProperty()
  @Column({ length: 100, nullable: true })
  firstName?: string;

  @ApiProperty()
  @Column({ length: 100, nullable: true })
  lastName?: string;

  @ApiProperty()
  @Column({ default: true })
  isActive: boolean;

  @ApiProperty({ enum: UserStatus, default: UserStatus.ACTIVE })
  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status: UserStatus;

  @ApiProperty({ enum: UserRole, isArray: true, default: [UserRole.USER] })
  @Column({
    type: 'text',
    array: true,
    default: [UserRole.USER],
  })
  roles: UserRole[];

  @ApiProperty()
  @Column({ nullable: true })
  lastLoginAt?: Date;
}
