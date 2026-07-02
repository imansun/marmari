import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IgnoredCostAllocationArea' })
export class LegacyIgnoredCostAllocationArea {
  @PrimaryColumn({ type: 'bigint', name: 'IgnoredCostAllocationAreaID' })
  ignoredCostAllocationAreaID: number;

  @Column({ type: 'bigint', name: 'CostCenterConversionSLRef', nullable: true })
  costCenterConversionSLRef: number | null;

  @Column({ type: 'bigint', name: 'CostCenterExRef' })
  costCenterExRef: number;

  @Column({ type: 'bigint', name: 'IgnoredCostCenterExRef' })
  ignoredCostCenterExRef: number;

  @Column({ type: 'bigint', name: 'IgnoredWorkstationRef', nullable: true })
  ignoredWorkstationRef: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}