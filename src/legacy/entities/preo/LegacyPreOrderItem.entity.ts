import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PreOrderItem' })
export class LegacyPreOrderItem {
  @PrimaryColumn({ type: 'bigint', name: 'PreOrderItemID' })
  preOrderItemID: number;

  @Column({ type: 'bigint', name: 'PreOrderRef' })
  preOrderRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'PurchaseItemRef' })
  purchaseItemRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'OrderInWay' })
  orderInWay: number;

  @Column({ type: 'numeric', name: 'FirstSelectionQuantity' })
  firstSelectionQuantity: number;

  @Column({ type: 'numeric', name: 'SecondSelectionQuantity' })
  secondSelectionQuantity: number;

  @Column({ type: 'numeric', name: 'ThirdSelectionQuantity' })
  thirdSelectionQuantity: number;

  @Column({ type: 'numeric', name: 'EconomicOrderQty' })
  economicOrderQty: number;

  @Column({ type: 'numeric', name: 'Fee', nullable: true })
  fee: number | null;

  @Column({ type: 'numeric', name: 'Price', nullable: true })
  price: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DeliveryDate', nullable: true })
  deliveryDate: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'numeric', name: 'PackageSize', nullable: true })
  packageSize: number | null;

  @Column({ type: 'numeric', name: 'MinQty', nullable: true })
  minQty: number | null;

  @Column({ type: 'numeric', name: 'MaxQty', nullable: true })
  maxQty: number | null;

  @Column({ type: 'character varying', name: 'Additional1', nullable: true })
  additional1: string | null;

  @Column({ type: 'character varying', name: 'Additional2', nullable: true })
  additional2: string | null;

  @Column({ type: 'character varying', name: 'Additional3', nullable: true })
  additional3: string | null;

  @Column({ type: 'character varying', name: 'Additional4', nullable: true })
  additional4: string | null;

  @Column({ type: 'character varying', name: 'Barcode', nullable: true })
  barcode: string | null;

  @Column({ type: 'numeric', name: 'ConsumerFee', nullable: true })
  consumerFee: number | null;

  @Column({ type: 'numeric', name: 'Discount', nullable: true })
  discount: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DiscountEndDate', nullable: true })
  discountEndDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'PartLastPurchaseDate', nullable: true })
  partLastPurchaseDate: Date | null;

  @Column({ type: 'numeric', name: 'ConsumerFeeAfterDiscount', nullable: true })
  consumerFeeAfterDiscount: number | null;

}