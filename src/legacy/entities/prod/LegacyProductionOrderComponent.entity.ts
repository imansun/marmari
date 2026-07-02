import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionOrderComponent' })
export class LegacyProductionOrderComponent {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionOrderComponentID' })
  productionOrderComponentID: number;

  @Column({ type: 'integer', name: 'Number' })
  number: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'numeric', name: 'ConsumptionScrapQuantity', nullable: true })
  consumptionScrapQuantity: number | null;

  @Column({ type: 'numeric', name: 'SideProductScrapQuantity', nullable: true })
  sideProductScrapQuantity: number | null;

  @Column({ type: 'numeric', name: 'ConsumptionScrapInPercent', nullable: true })
  consumptionScrapInPercent: number | null;

  @Column({ type: 'boolean', name: 'OperationScrapIndicator' })
  operationScrapIndicator: boolean;

  @Column({ type: 'numeric', name: 'OperationScrapInPercent' })
  operationScrapInPercent: number;

  @Column({ type: 'numeric', name: 'OperationScrapInQuantity' })
  operationScrapInQuantity: number;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bigint', name: 'ScrapStoreRef', nullable: true })
  scrapStoreRef: number | null;

  @Column({ type: 'integer', name: 'GroupNumber', nullable: true })
  groupNumber: number | null;

  @Column({ type: 'integer', name: 'Priority', nullable: true })
  priority: number | null;

  @Column({ type: 'integer', name: 'AlternativeStrategy', nullable: true })
  alternativeStrategy: number | null;

  @Column({ type: 'boolean', name: 'DirectProduction', nullable: true })
  directProduction: boolean | null;

  @Column({ type: 'integer', name: 'IssueMethod', nullable: true })
  issueMethod: number | null;

  @Column({ type: 'boolean', name: 'InterStoreDeliveryRequest', nullable: true })
  interStoreDeliveryRequest: boolean | null;

  @Column({ type: 'integer', name: 'PartIssueType', nullable: true })
  partIssueType: number | null;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef', nullable: true })
  inventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'bigint', name: 'ScrapInventoryVoucherSpecificationRef', nullable: true })
  scrapInventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'boolean', name: 'Backflushable' })
  backflushable: boolean;

  @Column({ type: 'boolean', name: 'ScrapBackflushable', nullable: true })
  scrapBackflushable: boolean | null;

  @Column({ type: 'integer', name: 'BackflushType', nullable: true })
  backflushType: number | null;

  @Column({ type: 'boolean', name: 'AutomaticReceiptPermit', nullable: true })
  automaticReceiptPermit: boolean | null;

  @Column({ type: 'boolean', name: 'AutomaticScrapReceiptPermit', nullable: true })
  automaticScrapReceiptPermit: boolean | null;

  @Column({ type: 'bigint', name: 'ProductionOrderOperationRef' })
  productionOrderOperationRef: number;

  @Column({ type: 'numeric', name: 'NetQuantity' })
  netQuantity: number;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

  @Column({ type: 'boolean', name: 'TransferredFromRouting', nullable: true })
  transferredFromRouting: boolean | null;

  @Column({ type: 'integer', name: 'ConsumptionType', nullable: true })
  consumptionType: number | null;

  @Column({ type: 'integer', name: 'SideProductProductionControlRelativeToPrediction', nullable: true })
  sideProductProductionControlRelativeToPrediction: number | null;

  @Column({ type: 'integer', name: 'SideProductProductionControlRelativeToOperationOutputProduction', nullable: true })
  sideProductProductionControlRelativeToOperationOutputProduction: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'YieldConsumptionRatio', nullable: true })
  yieldConsumptionRatio: number | null;

  @Column({ type: 'numeric', name: 'ScrapConsumptionRatio', nullable: true })
  scrapConsumptionRatio: number | null;

  @Column({ type: 'integer', name: 'InterStoreDeliveryRequestType', nullable: true })
  interStoreDeliveryRequestType: number | null;

}