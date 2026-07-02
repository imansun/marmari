import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { YearEndClosing } from './year-end-closing.entity';

export enum ClosingAccountType {
  CLOSING = 'closing',
  OPENING = 'opening',
  NATURE_ADJUSTMENT = 'nature_adjustment',
}

@Entity('year_end_closing_account', { schema: 'public' })
export class YearEndClosingAccount extends BaseEntity {
  @ManyToOne(() => YearEndClosing, (closing) => closing.accounts)
  @JoinColumn({ name: 'closingId' })
  closing: YearEndClosing;

  @ApiProperty()
  @Column()
  closingId: string;

  @ApiProperty()
  @Column()
  accountId: string;

  @ApiProperty({ enum: ClosingAccountType })
  @Column({
    type: 'enum',
    enum: ClosingAccountType,
  })
  closingType: ClosingAccountType;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  debit: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  credit: number;
}
