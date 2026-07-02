import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvoicePaymentBehest' })
export class LegacyInvoicePaymentBehest {
  @PrimaryColumn({ type: 'bigint', name: 'InvoicePaymentBehestID' })
  invoicePaymentBehestID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'InvoicePreServicesGoodsGroupKind', nullable: true })
  invoicePreServicesGoodsGroupKind: string | null;

  @Column({ type: 'bigint', name: 'PurchaseRequestNoRef1Ref', nullable: true })
  purchaseRequestNoRef1Ref: number | null;

  @Column({ type: 'bigint', name: 'NoPurchaseRequestNoRef2Ref', nullable: true })
  noPurchaseRequestNoRef2Ref: number | null;

  @Column({ type: 'bigint', name: 'PurchaseRequestNoRef3Ref', nullable: true })
  purchaseRequestNoRef3Ref: number | null;

  @Column({ type: 'bigint', name: 'PurchaseRequestNoRef4Ref', nullable: true })
  purchaseRequestNoRef4Ref: number | null;

  @Column({ type: 'bigint', name: 'PurchaseRequestNoRef5Ref', nullable: true })
  purchaseRequestNoRef5Ref: number | null;

  @Column({ type: 'bigint', name: 'DoerSecureNameRef', nullable: true })
  doerSecureNameRef: number | null;

  @Column({ type: 'integer', name: 'DeliveryTime', nullable: true })
  deliveryTime: number | null;

  @Column({ type: 'character varying', name: 'SecureCreditComments', nullable: true })
  secureCreditComments: string | null;

  @Column({ type: 'bigint', name: 'FirstInquiry', nullable: true })
  firstInquiry: number | null;

  @Column({ type: 'bigint', name: 'SecondInquiry', nullable: true })
  secondInquiry: number | null;

  @Column({ type: 'bigint', name: 'ThirdInquiry', nullable: true })
  thirdInquiry: number | null;

  @Column({ type: 'bigint', name: 'Khryd6RequestNoRef', nullable: true })
  khryd6RequestNoRef: number | null;

  @Column({ type: 'bigint', name: 'Khryd8RequestNoRef', nullable: true })
  khryd8RequestNoRef: number | null;

  @Column({ type: 'bigint', name: 'Khryd7RequestNoRef', nullable: true })
  khryd7RequestNoRef: number | null;

  @Column({ type: 'bigint', name: 'Khryd9RequestNoRef', nullable: true })
  khryd9RequestNoRef: number | null;

  @Column({ type: 'bigint', name: 'DoerSecureAccountAmbulationReportage', nullable: true })
  doerSecureAccountAmbulationReportage: number | null;

  @Column({ type: 'numeric', name: 'IsTjmyaMjuzatQuantity', nullable: true })
  isTjmyaMjuzatQuantity: number | null;

  @Column({ type: 'bigint', name: 'Drkhuast1ConsumptionSlotRef', nullable: true })
  drkhuast1ConsumptionSlotRef: number | null;

  @Column({ type: 'character varying', name: 'Dhndh1RequestName', nullable: true })
  dhndh1RequestName: string | null;

  @Column({ type: 'bigint', name: 'Drkhuast2ConsumptionSlotRef', nullable: true })
  drkhuast2ConsumptionSlotRef: number | null;

  @Column({ type: 'character varying', name: 'Knndh2RequestName', nullable: true })
  knndh2RequestName: string | null;

  @Column({ type: 'bigint', name: 'Drkhuast3ConsumptionSlotRef', nullable: true })
  drkhuast3ConsumptionSlotRef: number | null;

  @Column({ type: 'character varying', name: 'Knndh3RequestName', nullable: true })
  knndh3RequestName: string | null;

  @Column({ type: 'bigint', name: 'Drkhuast4ConsumptionSlotRef', nullable: true })
  drkhuast4ConsumptionSlotRef: number | null;

  @Column({ type: 'character varying', name: 'Knndh4RequestName', nullable: true })
  knndh4RequestName: string | null;

  @Column({ type: 'bigint', name: 'Drkhuast6ConsumptionSlotRef', nullable: true })
  drkhuast6ConsumptionSlotRef: number | null;

  @Column({ type: 'character varying', name: 'Knndh6RequestName', nullable: true })
  knndh6RequestName: string | null;

  @Column({ type: 'bigint', name: 'Drkhuast5ConsumptionSlotRef', nullable: true })
  drkhuast5ConsumptionSlotRef: number | null;

  @Column({ type: 'character varying', name: 'Knndh5RequestName', nullable: true })
  knndh5RequestName: string | null;

  @Column({ type: 'bigint', name: 'Drkhuast8ConsumptionSlotRef', nullable: true })
  drkhuast8ConsumptionSlotRef: number | null;

  @Column({ type: 'character varying', name: 'Knndh8RequestName', nullable: true })
  knndh8RequestName: string | null;

  @Column({ type: 'bigint', name: 'Drkhuast9ConsumptionSlotRef', nullable: true })
  drkhuast9ConsumptionSlotRef: number | null;

  @Column({ type: 'character varying', name: 'Knndh9RequestName', nullable: true })
  knndh9RequestName: string | null;

  @Column({ type: 'bigint', name: 'Darkhuast7ConsumptionSlotRef', nullable: true })
  darkhuast7ConsumptionSlotRef: number | null;

  @Column({ type: 'character varying', name: 'Konandh7RequestName', nullable: true })
  konandh7RequestName: string | null;

  @Column({ type: 'character varying', name: 'PaymentBehestNo' })
  paymentBehestNo: string;

  @Column({ type: 'timestamp without time zone', name: 'PaymentBehestEntryDate', nullable: true })
  paymentBehestEntryDate: Date | null;

  @Column({ type: 'character varying', name: 'SupplementalNzratAndComments', nullable: true })
  supplementalNzratAndComments: string | null;

  @Column({ type: 'bigint', name: 'DoerRequestCreditManagerRef', nullable: true })
  doerRequestCreditManagerRef: number | null;

  @Column({ type: 'bigint', name: 'No1DoerRequestCreditRef', nullable: true })
  no1DoerRequestCreditRef: number | null;

  @Column({ type: 'bigint', name: 'No2DoerRequestCreditRef', nullable: true })
  no2DoerRequestCreditRef: number | null;

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

}