import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MgInvPayOrderComm' })
export class LegacyMgInvPayOrderComm {
  @PrimaryColumn({ type: 'bigint', name: 'MgInvPayOrderCommID' })
  mgInvPayOrderCommID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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

  @Column({ type: 'bigint', name: 'DoerSecureAccountAmbulationReportage', nullable: true })
  doerSecureAccountAmbulationReportage: number | null;

  @Column({ type: 'numeric', name: 'IsTjmyaMjuzatQuantity', nullable: true })
  isTjmyaMjuzatQuantity: number | null;

  @Column({ type: 'character varying', name: 'PaymentBehestNo' })
  paymentBehestNo: string;

  @Column({ type: 'timestamp without time zone', name: 'PaymentBehestEntryDate', nullable: true })
  paymentBehestEntryDate: Date | null;

  @Column({ type: 'character varying', name: 'SupplementalNzratAndComments', nullable: true })
  supplementalNzratAndComments: string | null;

  @Column({ type: 'bigint', name: 'No1DoerRequestCreditRef', nullable: true })
  no1DoerRequestCreditRef: number | null;

  @Column({ type: 'bigint', name: 'No2DoerRequestCreditRef', nullable: true })
  no2DoerRequestCreditRef: number | null;

  @Column({ type: 'character varying', name: 'TamynknndhGrdshhsabComments', nullable: true })
  tamynknndhGrdshhsabComments: string | null;

  @Column({ type: 'bigint', name: 'DoerSecureMalayConfirmFoldingMoney', nullable: true })
  doerSecureMalayConfirmFoldingMoney: number | null;

  @Column({ type: 'bigint', name: 'FoldingMoneySayr', nullable: true })
  foldingMoneySayr: number | null;

  @Column({ type: 'character varying', name: 'DuringIsDesigning', nullable: true })
  duringIsDesigning: string | null;

  @Column({ type: 'bigint', name: 'EventualReportage', nullable: true })
  eventualReportage: number | null;

  @Column({ type: 'bigint', name: 'ValenceAttestation', nullable: true })
  valenceAttestation: number | null;

  @Column({ type: 'character varying', name: 'ExpertNzratComments', nullable: true })
  expertNzratComments: string | null;

  @Column({ type: 'character varying', name: 'MdyrmalCommentsNzrat', nullable: true })
  mdyrmalCommentsNzrat: string | null;

  @Column({ type: 'numeric', name: 'InquiryInvSum', nullable: true })
  inquiryInvSum: number | null;

  @Column({ type: 'bigint', name: 'Khrydkala1RequestNoRef', nullable: true })
  khrydkala1RequestNoRef: number | null;

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

  @Column({ type: 'character varying', name: 'Masrf1Slot', nullable: true })
  masrf1Slot: string | null;

  @Column({ type: 'bigint', name: 'ExpertNameRef', nullable: true })
  expertNameRef: number | null;

  @Column({ type: 'bigint', name: 'InvoicePreServicesGoodsRef', nullable: true })
  invoicePreServicesGoodsRef: number | null;

  @Column({ type: 'character varying', name: 'DoerRequestCreditManager', nullable: true })
  doerRequestCreditManager: string | null;

  @Column({ type: 'character varying', name: 'CommissionActuaryComments', nullable: true })
  commissionActuaryComments: string | null;

  @Column({ type: 'character varying', name: 'CommissionBusinessAffiliateComments', nullable: true })
  commissionBusinessAffiliateComments: string | null;

  @Column({ type: 'character varying', name: 'CommissionAdministerComments', nullable: true })
  commissionAdministerComments: string | null;

  @Column({ type: 'numeric', name: 'ContractorGhablprdakhtInvoiceSum', nullable: true })
  contractorGhablprdakhtInvoiceSum: number | null;

  @Column({ type: 'bigint', name: 'ReportNoRef', nullable: true })
  reportNoRef: number | null;

  @Column({ type: 'bigint', name: 'ContractorRequestNoRef', nullable: true })
  contractorRequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'ContractorName', nullable: true })
  contractorName: string | null;

  @Column({ type: 'numeric', name: 'InvoiceKsuratTkhfyfatAllAmount', nullable: true })
  invoiceKsuratTkhfyfatAllAmount: number | null;

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

  @Column({ type: 'character varying', name: 'UahdtamynTuzyhattkmyl', nullable: true })
  uahdtamynTuzyhattkmyl: string | null;

  @Column({ type: 'character varying', name: 'AmendmentComments', nullable: true })
  amendmentComments: string | null;

}