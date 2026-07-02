import { Entity, Column, Index, OneToMany } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { YearEndClosingAccount } from './year-end-closing-account.entity';

export enum ClosingStatus {
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  REVERSED = 'reversed',
}

@Entity('year_end_closing', { schema: 'public' })
export class YearEndClosing extends BaseEntity {
  @ApiProperty()
  @Column()
  fiscalYearId: string;

  @ApiProperty()
  @Column({ type: 'date' })
  closingDate: Date;

  @ApiProperty({ enum: ClosingStatus, default: ClosingStatus.IN_PROGRESS })
  @Column({
    type: 'enum',
    enum: ClosingStatus,
    default: ClosingStatus.IN_PROGRESS,
  })
  status: ClosingStatus;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  notes?: string;

  @ApiProperty()
  @Column()
  closedBy: string;

  @OneToMany(() => YearEndClosingAccount, (account) => account.closing, { cascade: true })
  accounts: YearEndClosingAccount[];
}
