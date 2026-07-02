import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MaterialClassProposalItem' })
export class LegacyMaterialClassProposalItem {
  @PrimaryColumn({ type: 'bigint', name: 'MaterialClassProposalItemID' })
  materialClassProposalItemID: number;

  @Column({ type: 'bigint', name: 'MaterialClassProposalRef' })
  materialClassProposalRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'character varying', name: 'ProposedClassNumber', nullable: true })
  proposedClassNumber: string | null;

  @Column({ type: 'bigint', name: 'MajorUnitRef', nullable: true })
  majorUnitRef: number | null;

  @Column({ type: 'numeric', name: 'ApproximatePrice', nullable: true })
  approximatePrice: number | null;

  @Column({ type: 'numeric', name: 'MinEstimatedAnnualUsage' })
  minEstimatedAnnualUsage: number;

  @Column({ type: 'numeric', name: 'MaxEstimatedAnnualUsage' })
  maxEstimatedAnnualUsage: number;

  @Column({ type: 'character varying', name: 'PartNo', nullable: true })
  partNo: string | null;

  @Column({ type: 'character varying', name: 'PartDesc' })
  partDesc: string;

  @Column({ type: 'integer', name: 'Priority', nullable: true })
  priority: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}