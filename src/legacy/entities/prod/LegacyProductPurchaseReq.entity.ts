import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductPurchaseReq' })
export class LegacyProductPurchaseReq {
  @PrimaryColumn({ type: 'bigint', name: 'ProductPurchaseReqID' })
  productPurchaseReqID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'RequestNo' })
  requestNo: string;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate', nullable: true })
  requestDate: Date | null;

  @Column({ type: 'character varying', name: 'CreditManagerComments', nullable: true })
  creditManagerComments: string | null;

  @Column({ type: 'character varying', name: 'InventoryLiableComments', nullable: true })
  inventoryLiableComments: string | null;

  @Column({ type: 'bigint', name: 'Coupling', nullable: true })
  coupling: number | null;

  @Column({ type: 'bigint', name: 'DoerRequestNameRef', nullable: true })
  doerRequestNameRef: number | null;

  @Column({ type: 'bigint', name: 'PurchaseReqInstitutionalCreditRef', nullable: true })
  purchaseReqInstitutionalCreditRef: number | null;

  @Column({ type: 'bigint', name: 'ConsumptionSlotRef', nullable: true })
  consumptionSlotRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DemandDateMaximum', nullable: true })
  demandDateMaximum: Date | null;

  @Column({ type: 'bigint', name: 'SecondCoupling', nullable: true })
  secondCoupling: number | null;

  @Column({ type: 'character varying', name: 'DuringIsDesigning', nullable: true })
  duringIsDesigning: string | null;

  @Column({ type: 'character varying', name: 'SupplementalComments', nullable: true })
  supplementalComments: string | null;

  @Column({ type: 'character varying', name: 'MdyraamlComments', nullable: true })
  mdyraamlComments: string | null;

  @Column({ type: 'integer', name: 'RequestCogency', nullable: true })
  requestCogency: number | null;

  @Column({ type: 'character varying', name: 'RequestCogencyComments', nullable: true })
  requestCogencyComments: string | null;

  @Column({ type: 'bigint', name: 'GoodsRequestNoRef', nullable: true })
  goodsRequestNoRef: number | null;

  @Column({ type: 'integer', name: 'BuyReqKind', nullable: true })
  buyReqKind: number | null;

  @Column({ type: 'boolean', name: 'InventoryCharge', nullable: true })
  inventoryCharge: boolean | null;

  @Column({ type: 'bigint', name: 'InvGoodsReqNoRef', nullable: true })
  invGoodsReqNoRef: number | null;

  @Column({ type: 'bigint', name: 'PurchaseSecureLiableRef', nullable: true })
  purchaseSecureLiableRef: number | null;

  @Column({ type: 'bigint', name: 'InventNameRef', nullable: true })
  inventNameRef: number | null;

  @Column({ type: 'character varying', name: 'InventoryChargeConsumptionSlot', nullable: true })
  inventoryChargeConsumptionSlot: string | null;

  @Column({ type: 'character varying', name: 'Req_Na_Store', nullable: true })
  reqNaStore: string | null;

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

  @Column({ type: 'character varying', name: 'AdministrativeManagerComments', nullable: true })
  administrativeManagerComments: string | null;

  @Column({ type: 'character varying', name: 'GoodsRequestNo', nullable: true })
  goodsRequestNo: string | null;

  @Column({ type: 'boolean', name: 'ForeignerPurchase', nullable: true })
  foreignerPurchase: boolean | null;

  @Column({ type: 'character varying', name: 'EventualConsumptionSlot', nullable: true })
  eventualConsumptionSlot: string | null;

  @Column({ type: 'boolean', name: 'GroupPurchase', nullable: true })
  groupPurchase: boolean | null;

  @Column({ type: 'bigint', name: 'GroupCompanyNameRef', nullable: true })
  groupCompanyNameRef: number | null;

  @Column({ type: 'character varying', name: 'MalayPeriod', nullable: true })
  malayPeriod: string | null;

  @Column({ type: 'character varying', name: 'GoodsRequestComments', nullable: true })
  goodsRequestComments: string | null;

  @Column({ type: 'character varying', name: 'DoerRequestComments', nullable: true })
  doerRequestComments: string | null;

  @Column({ type: 'bigint', name: 'RequestAccurateslotRef', nullable: true })
  requestAccurateslotRef: number | null;

  @Column({ type: 'character varying', nullable: true })
  chargeAccurateMhlmsrf: string | null;

  @Column({ type: 'character varying', name: 'RequestFirst', nullable: true })
  requestFirst: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Buyreqdate', nullable: true })
  buyreqdate: Date | null;

  @Column({ type: 'boolean', name: 'GoodsExamplePer', nullable: true })
  goodsExamplePer: boolean | null;

}