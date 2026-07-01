import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum CampaignType {
  EMAIL = 'email',
  SMS = 'sms',
  PHONE = 'phone',
  IN_PERSON = 'in_person',
  SOCIAL_MEDIA = 'social_media',
  OTHER = 'other',
}

export enum CampaignStatus {
  PLANNED = 'planned',
  ACTIVE = 'active',
  PAUSED = 'paused',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity('campaigns', { schema: 'public' })
export class Campaign extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiProperty({ enum: CampaignType })
  @Column({ type: 'enum', enum: CampaignType })
  campaignType: CampaignType;

  @ApiProperty({ enum: CampaignStatus, default: CampaignStatus.PLANNED })
  @Column({
    type: 'enum',
    enum: CampaignStatus,
    default: CampaignStatus.PLANNED,
  })
  status: CampaignStatus;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  startDate: Date;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  endDate: Date;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  budget: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  cost: number;

  @ApiPropertyOptional()
  @Column({ length: 1000, nullable: true })
  description?: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  targetAudience?: string;

  @ApiPropertyOptional({ default: 0 })
  @Column({ default: 0 })
  leadsGenerated: number;

  @ApiPropertyOptional({ default: 0 })
  @Column({ default: 0 })
  conversions: number;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  ownerId?: string;
}
