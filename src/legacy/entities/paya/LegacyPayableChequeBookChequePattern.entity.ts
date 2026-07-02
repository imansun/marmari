import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PayableChequeBookChequePattern' })
export class LegacyPayableChequeBookChequePattern {
  @PrimaryColumn({ type: 'bigint', name: 'PayableChequeBookChequePatternID' })
  payableChequeBookChequePatternID: number;

  @Column({ type: 'bigint', name: 'PayableChequeBookRef' })
  payableChequeBookRef: number;

  @Column({ type: 'bigint', name: 'ChequePatternRef' })
  chequePatternRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}