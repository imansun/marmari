import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AcquisitionCost' })
export class LegacyAcquisitionCost {
  @PrimaryColumn({ type: 'bigint', name: 'AcquisitionCostID' })
  acquisitionCostID: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'ContractRef' })
  contractRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}