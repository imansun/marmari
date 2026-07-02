import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartUnitProposal' })
export class LegacyPartUnitProposal {
  @PrimaryColumn({ type: 'bigint', name: 'PartUnitProposalID' })
  partUnitProposalID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'RemainingDivisionType', nullable: true })
  remainingDivisionType: number | null;

}