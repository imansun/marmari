import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TempDeliveryConfirmation' })
export class LegacyTempDeliveryConfirmation {
  @PrimaryColumn({ type: 'bigint', name: 'TempDeliveryConfirmationID' })
  tempDeliveryConfirmationID: number;

  @Column({ type: 'bigint', name: 'BillOfMaterialRef' })
  billOfMaterialRef: number;

  @Column({ type: 'character varying', name: 'ProductionOrderNumber' })
  productionOrderNumber: string;

  @Column({ type: 'character varying', name: 'ConfirmationNumber' })
  confirmationNumber: string;

  @Column({ type: 'bigint', name: 'ConfirmationRef' })
  confirmationRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'SourceCostCenterRef' })
  sourceCostCenterRef: number;

  @Column({ type: 'bigint', name: 'SourceWorkstationRef' })
  sourceWorkstationRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'numeric', name: 'DeliveryQuantity' })
  deliveryQuantity: number;

  @Column({ type: 'numeric', name: 'DeliverableQuantity' })
  deliverableQuantity: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'numeric', name: 'ActualDeliveryQuantity' })
  actualDeliveryQuantity: number;

  @Column({ type: 'timestamp without time zone', name: 'ConfirmationDate' })
  confirmationDate: Date;

  @Column({ type: 'bigint', name: 'RoutingOperationRef', nullable: true })
  routingOperationRef: number | null;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'DestinationCostCenterRef', nullable: true })
  destinationCostCenterRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'DissimilarScrap', nullable: true })
  dissimilarScrap: number | null;

}