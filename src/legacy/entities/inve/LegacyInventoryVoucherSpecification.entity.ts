import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryVoucherSpecification' })
export class LegacyInventoryVoucherSpecification {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryVoucherSpecificationID' })
  inventoryVoucherSpecificationID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'Direction' })
  direction: number;

  @Column({ type: 'boolean', name: 'IsReturn' })
  isReturn: boolean;

  @Column({ type: 'integer', name: 'MaxRows' })
  maxRows: number;

  @Column({ type: 'character varying', name: 'StockCaption' })
  stockCaption: string;

  @Column({ type: 'integer', name: 'Category' })
  category: number;

  @Column({ type: 'boolean', name: 'HasDelivererOrReceiver' })
  hasDelivererOrReceiver: boolean;

  @Column({ type: 'character varying', name: 'DelivererOrReceiverCaption', nullable: true })
  delivererOrReceiverCaption: string | null;

  @Column({ type: 'boolean', name: 'HasCounterpartStock' })
  hasCounterpartStock: boolean;

  @Column({ type: 'character varying', name: 'CounterpartStockCaption', nullable: true })
  counterpartStockCaption: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'PartTypes' })
  partTypes: number;

  @Column({ type: 'integer', name: 'TypeOfEffectOnStock' })
  typeOfEffectOnStock: number;

  @Column({ type: 'bigint', name: 'ValidReferences' })
  validReferences: number;

  @Column({ type: 'bigint', name: 'DefaultReference', nullable: true })
  defaultReference: number | null;

  @Column({ type: 'bigint', name: 'ReferencedVoucherSpecificationRef', nullable: true })
  referencedVoucherSpecificationRef: number | null;

  @Column({ type: 'boolean', name: 'HasReference' })
  hasReference: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'Visible' })
  visible: boolean;

  @Column({ type: 'boolean', name: 'Editable' })
  editable: boolean;

  @Column({ type: 'boolean', name: 'IsWithoutReference' })
  isWithoutReference: boolean;

  @Column({ type: 'integer', name: 'PricingFactor' })
  pricingFactor: number;

  @Column({ type: 'boolean', name: 'NeedsReturnableVoucherItem' })
  needsReturnableVoucherItem: boolean;

  @Column({ type: 'character varying', name: 'Additional1', nullable: true })
  additional1: string | null;

  @Column({ type: 'character varying', name: 'Additional2', nullable: true })
  additional2: string | null;

  @Column({ type: 'character varying', name: 'Additional3', nullable: true })
  additional3: string | null;

  @Column({ type: 'character varying', name: 'Additional4', nullable: true })
  additional4: string | null;

  @Column({ type: 'character varying', name: 'Additional5', nullable: true })
  additional5: string | null;

  @Column({ type: 'character varying', name: 'AdditionalItem1', nullable: true })
  additionalItem1: string | null;

  @Column({ type: 'character varying', name: 'AdditionalItem2', nullable: true })
  additionalItem2: string | null;

  @Column({ type: 'character varying', name: 'AdditionalItem3', nullable: true })
  additionalItem3: string | null;

  @Column({ type: 'character varying', name: 'AdditionalItem4', nullable: true })
  additionalItem4: string | null;

  @Column({ type: 'character varying', name: 'AdditionalItem5', nullable: true })
  additionalItem5: string | null;

  @Column({ type: 'integer', name: 'TrackingFactorDialogState' })
  trackingFactorDialogState: number;

  @Column({ type: 'boolean', name: 'ShowPartTechnicalSpecification', default: false })
  showPartTechnicalSpecification: boolean;

  @Column({ type: 'boolean', name: 'ShowPartPropertiesComment', default: false })
  showPartPropertiesComment: boolean;

  @Column({ type: 'boolean', name: 'ShowPhysicalRemaining', default: false })
  showPhysicalRemaining: boolean;

  @Column({ type: 'boolean', name: 'ShowCommittableRemaining', default: false })
  showCommittableRemaining: boolean;

  @Column({ type: 'boolean', name: 'IsCorectiveVoucher', default: false })
  isCorectiveVoucher: boolean;

  @Column({ type: 'boolean', name: 'IsAdditional1Required', default: false })
  isAdditional1Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditional2Required', default: false })
  isAdditional2Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditional3Required', default: false })
  isAdditional3Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditional4Required', default: false })
  isAdditional4Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditional5Required', default: false })
  isAdditional5Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditionalItem1Required', default: false })
  isAdditionalItem1Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditionalItem2Required', default: false })
  isAdditionalItem2Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditionalItem3Required', default: false })
  isAdditionalItem3Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditionalItem4Required', default: false })
  isAdditionalItem4Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditionalItem5Required', default: false })
  isAdditionalItem5Required: boolean;

  @Column({ type: 'integer', name: 'PurchaseType', nullable: true })
  purchaseType: number | null;

}