import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OutputTransactionItemPrice' })
export class LegacyOutputTransactionItemPrice {
  @PrimaryColumn({ type: 'bigint', name: 'OutputTransactionItemPriceID' })
  outputTransactionItemPriceID: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'bigint', name: 'OutputTransactionItemRef' })
  outputTransactionItemRef: number;

  @Column({ type: 'numeric', name: 'FeeActual' })
  feeActual: number;

  @Column({ type: 'numeric', name: 'FeeStandard' })
  feeStandard: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}