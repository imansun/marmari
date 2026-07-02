import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CashierHistory' })
export class LegacyCashierHistory {
  @PrimaryColumn({ type: 'bigint', name: 'CashierHistoryID' })
  cashierHistoryID: number;

  @Column({ type: 'bigint', name: 'CashRef' })
  cashRef: number;

  @Column({ type: 'bigint', name: 'CashierRef' })
  cashierRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}