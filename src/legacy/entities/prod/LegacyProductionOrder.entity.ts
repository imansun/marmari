import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionOrder' })
export class LegacyProductionOrder {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionOrderID' })
  productionOrderID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'smallint', name: 'ManufacturingOrderType', default: 1 })
  manufacturingOrderType: number;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bigint', name: 'RoutingRef', nullable: true })
  routingRef: number | null;

  @Column({ type: 'bigint', name: 'BomRef', nullable: true })
  bomRef: number | null;

  @Column({ type: 'bigint', name: 'ReferenceOperationSetRef', nullable: true })
  referenceOperationSetRef: number | null;

  @Column({ type: 'integer', name: 'BatchType' })
  batchType: number;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

  @Column({ type: 'integer', name: 'ProductionOrderType', nullable: true })
  productionOrderType: number | null;

  @Column({ type: 'integer', name: 'ProductionMethod', nullable: true })
  productionMethod: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'WorkCenterRef', nullable: true })
  workCenterRef: number | null;

  @Column({ type: 'boolean', name: 'AutomaticReservationForReturnItem', nullable: true })
  automaticReservationForReturnItem: boolean | null;

  @Column({ type: 'boolean', name: 'AutomaticIssuePermitForReturnItem', nullable: true })
  automaticIssuePermitForReturnItem: boolean | null;

  @Column({ type: 'bigint', name: 'StoreRefForReturnItem', nullable: true })
  storeRefForReturnItem: number | null;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationForReturnItem', nullable: true })
  inventoryVoucherSpecificationForReturnItem: number | null;

  @Column({ type: 'bigint', name: 'CombiningProductionOrderRef', nullable: true })
  combiningProductionOrderRef: number | null;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bigint', name: 'ScrapStoreRef', nullable: true })
  scrapStoreRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef', nullable: true })
  inventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'bigint', name: 'ScrapInventoryVoucherSpecificationRef', nullable: true })
  scrapInventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'boolean', name: 'Backflushable' })
  backflushable: boolean;

  @Column({ type: 'boolean', name: 'ScrapBackflushable' })
  scrapBackflushable: boolean;

  @Column({ type: 'boolean', name: 'AutomaticReceiptPermit' })
  automaticReceiptPermit: boolean;

  @Column({ type: 'boolean', name: 'AutomaticScrapReceiptPermit' })
  automaticScrapReceiptPermit: boolean;

  @Column({ type: 'boolean', name: 'AutomaticReservation' })
  automaticReservation: boolean;

  @Column({ type: 'boolean', name: 'AutomaticIssuePermit' })
  automaticIssuePermit: boolean;

  @Column({ type: 'boolean', name: 'AutomaticDirect', nullable: true })
  automaticDirect: boolean | null;

  @Column({ type: 'boolean', name: 'AutomaticDirectStateChange', nullable: true })
  automaticDirectStateChange: boolean | null;

  @Column({ type: 'boolean', name: 'AutomaticBatch', nullable: true })
  automaticBatch: boolean | null;

  @Column({ type: 'timestamp without time zone', name: 'PlannedStartDate', nullable: true })
  plannedStartDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'PlannedEndDate', nullable: true })
  plannedEndDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ActualStartDate', nullable: true })
  actualStartDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ActualEndDate', nullable: true })
  actualEndDate: Date | null;

  @Column({ type: 'integer', name: 'Priority', nullable: true })
  priority: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'NeedDate', nullable: true })
  needDate: Date | null;

}