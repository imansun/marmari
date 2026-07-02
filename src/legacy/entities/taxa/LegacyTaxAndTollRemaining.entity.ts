import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxAndTollRemaining' })
export class LegacyTaxAndTollRemaining {
  @PrimaryColumn({ type: 'bigint', name: 'TaxAndTollRemainingID' })
  taxAndTollRemainingID: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'numeric', name: 'TaxFirstAmount' })
  taxFirstAmount: number;

  @Column({ type: 'numeric', name: 'TaxFinalAmount' })
  taxFinalAmount: number;

  @Column({ type: 'numeric', name: 'TollFirstAmount' })
  tollFirstAmount: number;

  @Column({ type: 'numeric', name: 'TollFinalAmount' })
  tollFinalAmount: number;

  @Column({ type: 'bigint', name: 'VATStatementRef' })
  vATStatementRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}