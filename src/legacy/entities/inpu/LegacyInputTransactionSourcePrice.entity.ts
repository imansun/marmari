import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InputTransactionSourcePrice' })
export class LegacyInputTransactionSourcePrice {
  @PrimaryColumn({ type: 'bigint', name: 'InputTransactionSourcePriceID' })
  inputTransactionSourcePriceID: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'bigint', name: 'InputTransactionSourceRef' })
  inputTransactionSourceRef: number;

  @Column({ type: 'numeric', name: 'FeeActual' })
  feeActual: number;

  @Column({ type: 'numeric', name: 'FeeStandard' })
  feeStandard: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}