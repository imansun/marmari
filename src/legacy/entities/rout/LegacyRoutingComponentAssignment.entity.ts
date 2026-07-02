import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RoutingComponentAssignment' })
export class LegacyRoutingComponentAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingComponentAssignmentID' })
  routingComponentAssignmentID: number;

  @Column({ type: 'integer', name: 'Number' })
  number: number;

  @Column({ type: 'bigint', name: 'BomItemRef' })
  bomItemRef: number;

  @Column({ type: 'bigint', name: 'RoutingOperationRef', nullable: true })
  routingOperationRef: number | null;

  @Column({ type: 'bigint', name: 'RoutingBomAssignmentRef' })
  routingBomAssignmentRef: number;

  @Column({ type: 'numeric', name: 'ConsumptionScrapInPercent', nullable: true })
  consumptionScrapInPercent: number | null;

  @Column({ type: 'numeric', name: 'SideProductScrapInPercent', nullable: true })
  sideProductScrapInPercent: number | null;

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

  @Column({ type: 'boolean', name: 'OperationScrapIndicator' })
  operationScrapIndicator: boolean;

  @Column({ type: 'numeric', name: 'OperationScrapInPercent', nullable: true })
  operationScrapInPercent: number | null;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bigint', name: 'ScrapStoreRef', nullable: true })
  scrapStoreRef: number | null;

  @Column({ type: 'boolean', name: 'DirectProduction', nullable: true })
  directProduction: boolean | null;

  @Column({ type: 'bigint', name: 'ScrapInventoryVoucherSpecificationRef', nullable: true })
  scrapInventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef', nullable: true })
  inventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'integer', name: 'IssueMethod', nullable: true })
  issueMethod: number | null;

  @Column({ type: 'boolean', name: 'InterStoreDeliveryRequest', nullable: true })
  interStoreDeliveryRequest: boolean | null;

  @Column({ type: 'integer', name: 'PartIssueType', nullable: true })
  partIssueType: number | null;

  @Column({ type: 'integer', name: 'SideProductProductionControlRelativeToPrediction', nullable: true })
  sideProductProductionControlRelativeToPrediction: number | null;

  @Column({ type: 'integer', name: 'SideProductProductionControlRelativeToOperationOutputProduction', nullable: true })
  sideProductProductionControlRelativeToOperationOutputProduction: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'InterStoreDeliveryRequestType', nullable: true })
  interStoreDeliveryRequestType: number | null;

}