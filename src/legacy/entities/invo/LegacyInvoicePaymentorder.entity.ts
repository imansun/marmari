import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvoicePaymentorder' })
export class LegacyInvoicePaymentorder {
  @PrimaryColumn({ type: 'bigint', name: 'InvoicePaymentorderID' })
  invoicePaymentorderID: number;

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

  @Column({ type: 'bigint', name: 'Khryd10RequestNoRef', nullable: true })
  khryd10RequestNoRef: number | null;

  @Column({ type: 'bigint', name: 'Drkhuast10ConsumptionSlotRef', nullable: true })
  drkhuast10ConsumptionSlotRef: number | null;

  @Column({ type: 'character varying', name: 'Knndh10RequestName', nullable: true })
  knndh10RequestName: string | null;

  @Column({ type: 'bigint', name: 'Khryd11RequestNoRef', nullable: true })
  khryd11RequestNoRef: number | null;

  @Column({ type: 'bigint', name: 'Drkhuast11ConsumptionSlotRef', nullable: true })
  drkhuast11ConsumptionSlotRef: number | null;

  @Column({ type: 'character varying', name: 'Knndh11RequestName', nullable: true })
  knndh11RequestName: string | null;

  @Column({ type: 'bigint', name: 'Khryd12RequestNoRef', nullable: true })
  khryd12RequestNoRef: number | null;

  @Column({ type: 'bigint', name: 'Drkhuast12ConsumptionSlotRef', nullable: true })
  drkhuast12ConsumptionSlotRef: number | null;

  @Column({ type: 'character varying', name: 'Knndh12RequestName', nullable: true })
  knndh12RequestName: string | null;

  @Column({ type: 'bigint', name: 'Khryd13RequestNoRef', nullable: true })
  khryd13RequestNoRef: number | null;

  @Column({ type: 'bigint', name: 'Drkhuast13ConsumptionSlotRef', nullable: true })
  drkhuast13ConsumptionSlotRef: number | null;

  @Column({ type: 'character varying', name: 'Knndh13RequestName', nullable: true })
  knndh13RequestName: string | null;

  @Column({ type: 'bigint', name: 'Khryd14RequestNoRef', nullable: true })
  khryd14RequestNoRef: number | null;

  @Column({ type: 'bigint', name: 'Drkhuast14ConsumptionSlotRef', nullable: true })
  drkhuast14ConsumptionSlotRef: number | null;

  @Column({ type: 'character varying', name: 'Knndh14RequestName', nullable: true })
  knndh14RequestName: string | null;

  @Column({ type: 'bigint', name: 'Khryd15RequestNoRef', nullable: true })
  khryd15RequestNoRef: number | null;

  @Column({ type: 'bigint', name: 'Drkhuast15ConsumptionSlotRef', nullable: true })
  drkhuast15ConsumptionSlotRef: number | null;

  @Column({ type: 'character varying', name: 'Knndh15RequestName', nullable: true })
  knndh15RequestName: string | null;

  @Column({ type: 'bigint', name: 'Khryd16RequestNoRef', nullable: true })
  khryd16RequestNoRef: number | null;

  @Column({ type: 'bigint', name: 'Drkhuast16ConsumptionSlotRef', nullable: true })
  drkhuast16ConsumptionSlotRef: number | null;

  @Column({ type: 'character varying', name: 'Knndh16RequestName', nullable: true })
  knndh16RequestName: string | null;

  @Column({ type: 'character varying', name: 'TamynknndhGrdshhsabComments', nullable: true })
  tamynknndhGrdshhsabComments: string | null;

  @Column({ type: 'bigint', name: 'DoerSecureMalayConfirmFoldingMoney', nullable: true })
  doerSecureMalayConfirmFoldingMoney: number | null;

  @Column({ type: 'bigint', name: 'FoldingMoneySayr', nullable: true })
  foldingMoneySayr: number | null;

  @Column({ type: 'character varying', name: 'DuringIsDesigning', nullable: true })
  duringIsDesigning: string | null;

  @Column({ type: 'bigint', name: 'ValenceAttestation', nullable: true })
  valenceAttestation: number | null;

  @Column({ type: 'character varying', name: 'MdyrmalCommentsNzrat', nullable: true })
  mdyrmalCommentsNzrat: string | null;

  @Column({ type: 'character varying', name: 'ExpertNzratComments', nullable: true })
  expertNzratComments: string | null;

  @Column({ type: 'bigint', name: 'EventualReportage', nullable: true })
  eventualReportage: number | null;

  @Column({ type: 'bigint', nullable: true })
  taminExpertNameRef: number | null;

  @Column({ type: 'numeric', name: 'InquiryInvoiceSum', nullable: true })
  inquiryInvoiceSum: number | null;

  @Column({ type: 'bigint', name: 'Khrydkala1RequestNoRef', nullable: true })
  khrydkala1RequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'Msrf1Slot', nullable: true })
  msrf1Slot: string | null;

  @Column({ type: 'character varying', name: 'No1DoerRequestName', nullable: true })
  no1DoerRequestName: string | null;

  @Column({ type: 'bigint', name: 'Khrydkala2RequestNoRef', nullable: true })
  khrydkala2RequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'Msrf2Slot', nullable: true })
  msrf2Slot: string | null;

  @Column({ type: 'character varying', name: 'No2DoerRequestName', nullable: true })
  no2DoerRequestName: string | null;

  @Column({ type: 'bigint', name: 'Khrydkala3RequestNoRef', nullable: true })
  khrydkala3RequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'Msrf3Slot', nullable: true })
  msrf3Slot: string | null;

  @Column({ type: 'character varying', name: 'No3DoerRequestName', nullable: true })
  no3DoerRequestName: string | null;

  @Column({ type: 'bigint', name: 'Khrydkala4RequestNoRef', nullable: true })
  khrydkala4RequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'Msrf4Slot', nullable: true })
  msrf4Slot: string | null;

  @Column({ type: 'character varying', name: 'No4DoerRequestName', nullable: true })
  no4DoerRequestName: string | null;

  @Column({ type: 'bigint', name: 'Khrydkala5RequestNoRef', nullable: true })
  khrydkala5RequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'Msrf5Slot', nullable: true })
  msrf5Slot: string | null;

  @Column({ type: 'character varying', name: 'No5DoerRequestName', nullable: true })
  no5DoerRequestName: string | null;

  @Column({ type: 'bigint', name: 'Khrydkala6RequestNoRef', nullable: true })
  khrydkala6RequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'Msrf6Slot', nullable: true })
  msrf6Slot: string | null;

  @Column({ type: 'character varying', name: 'No6DoerRequestName', nullable: true })
  no6DoerRequestName: string | null;

  @Column({ type: 'bigint', name: 'Khrydkala7RequestNoRef', nullable: true })
  khrydkala7RequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'Msrf7Slot', nullable: true })
  msrf7Slot: string | null;

  @Column({ type: 'character varying', name: 'No7DoerRequestName', nullable: true })
  no7DoerRequestName: string | null;

  @Column({ type: 'bigint', name: 'Khrydkala8RequestNoRef', nullable: true })
  khrydkala8RequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'Msrf8Slot', nullable: true })
  msrf8Slot: string | null;

  @Column({ type: 'character varying', name: 'No8DoerRequestName', nullable: true })
  no8DoerRequestName: string | null;

  @Column({ type: 'bigint', name: 'Khrydkala9RequestNoRef', nullable: true })
  khrydkala9RequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'Msrf9Slot', nullable: true })
  msrf9Slot: string | null;

  @Column({ type: 'character varying', name: 'No9DoerRequestName', nullable: true })
  no9DoerRequestName: string | null;

  @Column({ type: 'bigint', name: 'Khrydkala10RequestNoRef', nullable: true })
  khrydkala10RequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'Msrf10Slot', nullable: true })
  msrf10Slot: string | null;

  @Column({ type: 'character varying', name: 'No10DoerRequestName', nullable: true })
  no10DoerRequestName: string | null;

  @Column({ type: 'bigint', name: 'Khrydkala11RequestNoRef', nullable: true })
  khrydkala11RequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'Msrf11Slot', nullable: true })
  msrf11Slot: string | null;

  @Column({ type: 'character varying', name: 'No11DoerRequestName', nullable: true })
  no11DoerRequestName: string | null;

  @Column({ type: 'bigint', name: 'Khrydkala12RequestNoRef', nullable: true })
  khrydkala12RequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'Msrf12Slot', nullable: true })
  msrf12Slot: string | null;

  @Column({ type: 'character varying', name: 'No12DoerRequestName', nullable: true })
  no12DoerRequestName: string | null;

  @Column({ type: 'integer', name: 'InvoicePreServices', nullable: true })
  invoicePreServices: number | null;

  @Column({ type: 'bigint', name: 'Name_KarshnasRef', nullable: true })
  nameKarshnasref: number | null;

  @Column({ type: 'bigint', name: 'InvoicePreServicesGoodsRef', nullable: true })
  invoicePreServicesGoodsRef: number | null;

  @Column({ type: 'character varying', name: 'DoerRequestCreditManager1', nullable: true })
  doerRequestCreditManager1: string | null;

  @Column({ type: 'character varying', name: 'MalayBailiffComments', nullable: true })
  malayBailiffComments: string | null;

  @Column({ type: 'bigint', name: 'ContractorRequestNoRef', nullable: true })
  contractorRequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'ContractorName', nullable: true })
  contractorName: string | null;

  @Column({ type: 'numeric', name: 'ContractorGhablprdakhtInvoiceSum', nullable: true })
  contractorGhablprdakhtInvoiceSum: number | null;

  @Column({ type: 'bigint', name: 'ReportNoRef', nullable: true })
  reportNoRef: number | null;

  @Column({ type: 'numeric', name: 'InvoiceKsuratTkhfyfatAllAmount', nullable: true })
  invoiceKsuratTkhfyfatAllAmount: number | null;

  @Column({ type: 'character varying', name: 'UahdtamynTuzyhattkmyl', nullable: true })
  uahdtamynTuzyhattkmyl: string | null;

  @Column({ type: 'character varying', name: 'AmendmentComments', nullable: true })
  amendmentComments: string | null;

}