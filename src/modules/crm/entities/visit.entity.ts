import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum VisitType {
  IN_PERSON = 'in_person',
  PHONE = 'phone',
  ONLINE = 'online',
  EMAIL = 'email',
}

export enum VisitStatus {
  SCHEDULED = 'scheduled',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  NO_SHOW = 'no_show',
}

@Entity('visits', { schema: 'public' })
export class Visit extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column()
  partyId: string;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  date: Date;

  @ApiProperty({ enum: VisitType })
  @Column({ type: 'enum', enum: VisitType, default: VisitType.IN_PERSON })
  visitType: VisitType;

  @ApiProperty({ enum: VisitStatus, default: VisitStatus.SCHEDULED })
  @Column({ type: 'enum', enum: VisitStatus, default: VisitStatus.SCHEDULED })
  status: VisitStatus;

  @ApiPropertyOptional()
  @Column({ length: 1000, nullable: true })
  notes?: string;

  @ApiPropertyOptional()
  @Column({ length: 1000, nullable: true })
  result?: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  userId?: string;

  @ApiPropertyOptional()
  @Column({ length: 200, nullable: true })
  location?: string;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  followUpDate?: Date;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  campaignId?: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  orderId?: string;
}
