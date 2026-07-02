import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductPurchaseReqInformation' })
export class LegacyProductPurchaseReqInformation {
  @PrimaryColumn({ type: 'bigint', name: 'ProductPurchaseReqInformationID' })
  productPurchaseReqInformationID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'numeric', name: 'RequestQuantity', nullable: true })
  requestQuantity: number | null;

  @Column({ type: 'character varying', name: 'SupplementalComments', nullable: true })
  supplementalComments: string | null;

  @Column({ type: 'character varying', name: 'AssayCredit', nullable: true })
  assayCredit: string | null;

  @Column({ type: 'character varying', name: 'GoodsCodePURReq', nullable: true })
  goodsCodePURReq: string | null;

  @Column({ type: 'bigint', name: 'ChargeNameRef', nullable: true })
  chargeNameRef: number | null;

  @Column({ type: 'character varying', name: 'InventoryChargeGoodsCode', nullable: true })
  inventoryChargeGoodsCode: string | null;

  @Column({ type: 'bigint', name: 'GoodsNameRef', nullable: true })
  goodsNameRef: number | null;

  @Column({ type: 'numeric', name: 'GoodsBalance', nullable: true })
  goodsBalance: number | null;

  @Column({ type: 'character varying', name: 'InventoryChargeGoodsCredit', nullable: true })
  inventoryChargeGoodsCredit: string | null;

  @Column({ type: 'numeric', name: 'InventoryChargeGoodsBalance', nullable: true })
  inventoryChargeGoodsBalance: number | null;

  @Column({ type: 'boolean', name: 'kharid_All', nullable: true })
  kharidAll: boolean | null;

  @Column({ type: 'bigint', name: 'InventoryChargeGoodsNameRef', nullable: true })
  inventoryChargeGoodsNameRef: number | null;

  @Column({ type: 'bigint', name: 'No2GoodsRef', nullable: true })
  no2GoodsRef: number | null;

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

  @Column({ type: 'character varying', name: 'ChargeAssayCredit', nullable: true })
  chargeAssayCredit: string | null;

  @Column({ type: 'character varying', name: 'InvChargeGoodsCode', nullable: true })
  invChargeGoodsCode: string | null;

  @Column({ type: 'character varying', name: 'Name', nullable: true })
  name: string | null;

  @Column({ type: 'character varying', name: 'RequestNo', nullable: true })
  requestNo: string | null;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate', nullable: true })
  requestDate: Date | null;

  @Column({ type: 'character varying', name: 'EventualGoodsCode', nullable: true })
  eventualGoodsCode: string | null;

  @Column({ type: 'character varying', name: 'EventualGoodsName', nullable: true })
  eventualGoodsName: string | null;

  @Column({ type: 'character varying', name: 'EventualUahdsnjsh', nullable: true })
  eventualUahdsnjsh: string | null;

  @Column({ type: 'bigint', name: 'KalaNameRef', nullable: true })
  kalaNameRef: number | null;

  @Column({ type: 'bigint', name: 'UahdRef', nullable: true })
  uahdRef: number | null;

}