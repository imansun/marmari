import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RationingItem' })
export class LegacyRationingItem {
  @PrimaryColumn({ type: 'bigint', name: 'RationingItemID' })
  rationingItemID: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'RationingRef' })
  rationingRef: number;

  @Column({ type: 'bigint', name: 'ParentRationingItemRef', nullable: true })
  parentRationingItemRef: number | null;

  @Column({ type: 'bigint', name: 'TransferedRationingItemRef', nullable: true })
  transferedRationingItemRef: number | null;

  @Column({ type: 'bigint', name: 'RationingParallelSegmentationRef' })
  rationingParallelSegmentationRef: number;

  @Column({ type: 'bigint', name: 'VariableParameterValue', nullable: true })
  variableParameterValue: number | null;

  @Column({ type: 'numeric', name: 'RationingPercent', nullable: true })
  rationingPercent: number | null;

  @Column({ type: 'numeric', name: 'InitialRationingQuantity' })
  initialRationingQuantity: number;

  @Column({ type: 'numeric', name: 'TransferedFromPreviousPeriodQuantity' })
  transferedFromPreviousPeriodQuantity: number;

  @Column({ type: 'numeric', name: 'IncreaseDecreaseQuantity' })
  increaseDecreaseQuantity: number;

  @Column({ type: 'numeric', name: 'TransferedIncreaseDecreaseQuantity' })
  transferedIncreaseDecreaseQuantity: number;

  @Column({ type: 'numeric', name: 'ClosedQuantity' })
  closedQuantity: number;

  @Column({ type: 'numeric', name: 'TransferedToNextPeriodQuantity' })
  transferedToNextPeriodQuantity: number;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

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