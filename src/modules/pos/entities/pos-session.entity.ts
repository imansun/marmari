import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum PosSessionStatus {
  OPEN = 'open',
  CLOSED = 'closed',
}

@Entity('pos_sessions', { schema: 'public' })
export class PosSession extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiProperty()
  @Column({ length: 100 })
  posName: string;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  openingBalance: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  currentBalance: number;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  openedAt: Date;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  closedAt?: Date;

  @ApiProperty()
  @Column()
  openedById: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  closedById?: string;

  @ApiProperty({ enum: PosSessionStatus, default: PosSessionStatus.OPEN })
  @Column({
    type: 'enum',
    enum: PosSessionStatus,
    default: PosSessionStatus.OPEN,
  })
  status: PosSessionStatus;
}
