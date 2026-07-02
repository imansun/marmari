import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SmallDealsQuorum' })
export class LegacySmallDealsQuorum {
  @PrimaryColumn({ type: 'bigint', name: 'SmallDealsQuorumID' })
  smallDealsQuorumID: number;

  @Column({ type: 'bigint', name: 'LedgerFiscalYearRef' })
  ledgerFiscalYearRef: number;

  @Column({ type: 'numeric', name: 'QuorumAmount' })
  quorumAmount: number;

  @Column({ type: 'numeric', name: 'PercentageAmount' })
  percentageAmount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}