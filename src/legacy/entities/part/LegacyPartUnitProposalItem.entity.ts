import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartUnitProposalItem' })
export class LegacyPartUnitProposalItem {
  @PrimaryColumn({ type: 'bigint', name: 'PartUnitProposalItemID' })
  partUnitProposalItemID: number;

  @Column({ type: 'bigint', name: 'PartUnitProposalRef' })
  partUnitProposalRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}