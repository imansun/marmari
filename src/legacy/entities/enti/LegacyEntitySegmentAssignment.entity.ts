import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntitySegmentAssignment' })
export class LegacyEntitySegmentAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'EntitySegmentAssignmentID' })
  entitySegmentAssignmentID: number;

  @Column({ type: 'bigint', name: 'EntitySegmentSettingRef' })
  entitySegmentSettingRef: number;

  @Column({ type: 'bigint', name: 'EntityID' })
  entityID: number;

  @Column({ type: 'bigint', name: 'CompanyRef', nullable: true })
  companyRef: number | null;

  @Column({ type: 'bigint', name: 'LedgerRef', nullable: true })
  ledgerRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}