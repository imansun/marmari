import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionOrderOperation' })
export class LegacyProductionOrderOperation {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionOrderOperationID' })
  productionOrderOperationID: number;

  @Column({ type: 'bigint', name: 'ProductionOrderRef', nullable: true })
  productionOrderRef: number | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'UniqueID' })
  uniqueID: number;

  @Column({ type: 'bigint', name: 'ProductionOrderSequenceRef' })
  productionOrderSequenceRef: number;

  @Column({ type: 'integer', name: 'Rank', nullable: true })
  rank: number | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'ScrapQuantity' })
  scrapQuantity: number;

  @Column({ type: 'numeric', name: 'TotalQuantity' })
  totalQuantity: number;

  @Column({ type: 'numeric', name: 'TotalProducedQuantity' })
  totalProducedQuantity: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bigint', name: 'WorkCenterRef' })
  workCenterRef: number;

  @Column({ type: 'bigint', name: 'OperationTypeRef', nullable: true })
  operationTypeRef: number | null;

  @Column({ type: 'bigint', name: 'ShiftRef', nullable: true })
  shiftRef: number | null;

  @Column({ type: 'numeric', name: 'OperationScrapInPercent', nullable: true })
  operationScrapInPercent: number | null;

  @Column({ type: 'boolean', name: 'Backflushable', nullable: true })
  backflushable: boolean | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDateTime', nullable: true })
  startDateTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDateTime', nullable: true })
  endDateTime: Date | null;

  @Column({ type: 'integer', name: 'Duration', nullable: true })
  duration: number | null;

  @Column({ type: 'boolean', name: 'TransferredFromRouting' })
  transferredFromRouting: boolean;

  @Column({ type: 'integer', name: 'Nature', nullable: true })
  nature: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}