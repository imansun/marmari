import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OutputTransactionItem' })
export class LegacyOutputTransactionItem {
  @PrimaryColumn({ type: 'bigint', name: 'OutputTransactionItemID' })
  outputTransactionItemID: number;

  @Column({ type: 'bigint', name: 'OutputTransactionRef' })
  outputTransactionRef: number;

  @Column({ type: 'bigint', name: 'CostCenterDeliveryRef', nullable: true })
  costCenterDeliveryRef: number | null;

  @Column({ type: 'bigint', name: 'CostCenterDeliveryItemRef', nullable: true })
  costCenterDeliveryItemRef: number | null;

  @Column({ type: 'bigint', name: 'WorkstationRef', nullable: true })
  workstationRef: number | null;

  @Column({ type: 'bigint', name: 'BillOfMaterialRef', nullable: true })
  billOfMaterialRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryVoucherRef', nullable: true })
  inventoryVoucherRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemRef', nullable: true })
  inventoryVoucherItemRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'RootReferenceNumber', nullable: true })
  rootReferenceNumber: string | null;

  @Column({ type: 'bigint', name: 'RootReferenceRef', nullable: true })
  rootReferenceRef: number | null;

  @Column({ type: 'integer', name: 'RootReferenceType', nullable: true })
  rootReferenceType: number | null;

  @Column({ type: 'bigint', name: 'ReturnableVoucherItemRef', nullable: true })
  returnableVoucherItemRef: number | null;

  @Column({ type: 'bigint', name: 'OutputTransactionDetailRef', nullable: true })
  outputTransactionDetailRef: number | null;

}