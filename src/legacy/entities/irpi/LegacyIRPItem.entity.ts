import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IRPItem' })
export class LegacyIRPItem {
  @PrimaryColumn({ type: 'bigint', name: 'IRPItemID' })
  iRPItemID: number;

  @Column({ type: 'bigint', name: 'IRPRef' })
  iRPRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}