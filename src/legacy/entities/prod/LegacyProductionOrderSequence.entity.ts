import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionOrderSequence' })
export class LegacyProductionOrderSequence {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionOrderSequenceID' })
  productionOrderSequenceID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'BranchProductionOrderOperationUniqueID', nullable: true })
  branchProductionOrderOperationUniqueID: number | null;

  @Column({ type: 'integer', name: 'ReturnProductionOrderOperationUniqueID', nullable: true })
  returnProductionOrderOperationUniqueID: number | null;

  @Column({ type: 'bigint', name: 'ProductionOrderRef' })
  productionOrderRef: number;

  @Column({ type: 'integer', name: 'ProductionOrderSequenceType' })
  productionOrderSequenceType: number;

  @Column({ type: 'boolean', name: 'TransferredFromRouting' })
  transferredFromRouting: boolean;

  @Column({ type: 'numeric', name: 'FromLotSize', nullable: true })
  fromLotSize: number | null;

  @Column({ type: 'numeric', name: 'ToLotSize', nullable: true })
  toLotSize: number | null;

  @Column({ type: 'numeric', name: 'BranchCoefficient', nullable: true })
  branchCoefficient: number | null;

  @Column({ type: 'numeric', name: 'ReworkQuota', nullable: true })
  reworkQuota: number | null;

  @Column({ type: 'bigint', name: 'ReferenceOperationSetRef', nullable: true })
  referenceOperationSetRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}