import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum PartyType {
  PERSON = 'person',
  COMPANY = 'company',
}

export enum PartyRole {
  CUSTOMER = 'customer',
  SUPPLIER = 'supplier',
  BOTH = 'both',
}

export enum PartyStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  BLOCKED = 'blocked',
}

@Entity('parties', { schema: 'public' })
export class Party extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiPropertyOptional()
  @Column({ length: 200, nullable: true })
  nameEn?: string;

  @ApiProperty({ enum: PartyType })
  @Column({
    type: 'enum',
    enum: PartyType,
    default: PartyType.PERSON,
  })
  partyType: PartyType;

  @ApiProperty({ enum: PartyRole, default: PartyRole.CUSTOMER })
  @Column({
    type: 'enum',
    enum: PartyRole,
    default: PartyRole.CUSTOMER,
  })
  role: PartyRole;

  @ApiProperty({ enum: PartyStatus, default: PartyStatus.ACTIVE })
  @Column({
    type: 'enum',
    enum: PartyStatus,
    default: PartyStatus.ACTIVE,
  })
  status: PartyStatus;

  @ApiPropertyOptional()
  @Column({ length: 50, nullable: true })
  nationalId?: string;

  @ApiPropertyOptional()
  @Column({ length: 20, nullable: true })
  economicCode?: string;

  @ApiPropertyOptional()
  @Column({ length: 20, nullable: true })
  registrationNumber?: string;

  @ApiPropertyOptional()
  @Column({ length: 100, nullable: true })
  phone?: string;

  @ApiPropertyOptional()
  @Column({ length: 100, nullable: true })
  mobile?: string;

  @ApiPropertyOptional()
  @Column({ length: 255, nullable: true })
  email?: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  address?: string;

  @ApiPropertyOptional()
  @Column({ length: 100, nullable: true })
  postalCode?: string;
}
