import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InputTransactionItem' })
export class LegacyInputTransactionItem {
  @PrimaryColumn({ type: 'bigint', name: 'InputTransactionItemID' })
  inputTransactionItemID: number;

  @Column({ type: 'bigint', name: 'InputTransactionRef' })
  inputTransactionRef: number;

  @Column({ type: 'bigint', name: 'CostCenterDeliveryRef', nullable: true })
  costCenterDeliveryRef: number | null;

  @Column({ type: 'bigint', name: 'CostCenterDeliveryItemRef', nullable: true })
  costCenterDeliveryItemRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryVoucherRef', nullable: true })
  inventoryVoucherRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemRef', nullable: true })
  inventoryVoucherItemRef: number | null;

  @Column({ type: 'bigint', name: 'DirectInputMaterialRef', nullable: true })
  directInputMaterialRef: number | null;

  @Column({ type: 'bigint', name: 'DirectInputMaterialItemRef', nullable: true })
  directInputMaterialItemRef: number | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'ProductionRef', nullable: true })
  productionRef: number | null;

  @Column({ type: 'character varying', name: 'RootReferenceNumber', nullable: true })
  rootReferenceNumber: string | null;

  @Column({ type: 'bigint', name: 'RootReferenceRef', nullable: true })
  rootReferenceRef: number | null;

  @Column({ type: 'integer', name: 'RootReferenceType', nullable: true })
  rootReferenceType: number | null;

  @Column({ type: 'bigint', name: 'ReturnableVoucherItemRef', nullable: true })
  returnableVoucherItemRef: number | null;

}