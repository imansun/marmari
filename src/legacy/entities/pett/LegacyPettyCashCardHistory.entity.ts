import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PettyCashCardHistory' })
export class LegacyPettyCashCardHistory {
  @PrimaryColumn({ type: 'bigint', name: 'PettyCashCardHistoryID' })
  pettyCashCardHistoryID: number;

  @Column({ type: 'bigint', name: 'PettyCashRef' })
  pettyCashRef: number;

  @Column({ type: 'bigint', name: 'PettyCashCardRef' })
  pettyCashCardRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}