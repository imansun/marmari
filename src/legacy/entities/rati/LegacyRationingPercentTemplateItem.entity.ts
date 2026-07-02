import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RationingPercentTemplateItem' })
export class LegacyRationingPercentTemplateItem {
  @PrimaryColumn({ type: 'bigint', name: 'RationingPercentTemplateItemID' })
  rationingPercentTemplateItemID: number;

  @Column({ type: 'bigint', name: 'RationingPercentTemplateRef' })
  rationingPercentTemplateRef: number;

  @Column({ type: 'bigint', name: 'RationingParallelSegmentationRef' })
  rationingParallelSegmentationRef: number;

  @Column({ type: 'bigint', name: 'ProductRef', nullable: true })
  productRef: number | null;

  @Column({ type: 'bigint', name: 'ProductGroupRef', nullable: true })
  productGroupRef: number | null;

  @Column({ type: 'bigint', name: 'VariableParameterValue' })
  variableParameterValue: number;

  @Column({ type: 'bigint', name: 'BranchRef', nullable: true })
  branchRef: number | null;

  @Column({ type: 'bigint', name: 'SalesOfficeRef', nullable: true })
  salesOfficeRef: number | null;

  @Column({ type: 'bigint', name: 'SalesGroupRef', nullable: true })
  salesGroupRef: number | null;

  @Column({ type: 'numeric', name: 'RationingPercent' })
  rationingPercent: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}