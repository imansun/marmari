import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum AccountDetailType {
  PERSON = 'person',
  BANK = 'bank',
  COST_CENTER = 'cost_center',
  PROJECT = 'project',
  CONTRACT = 'contract',
  OTHER = 'other',
}

@Entity('account_detail', { schema: 'public' })
export class AccountDetail extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiProperty()
  @Column()
  accountId: string;

  @ApiProperty({ enum: AccountDetailType })
  @Column({
    type: 'enum',
    enum: AccountDetailType,
  })
  detailType: AccountDetailType;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  referenceId?: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiProperty({ default: true })
  @Column({ default: true })
  isActive: boolean;
}
