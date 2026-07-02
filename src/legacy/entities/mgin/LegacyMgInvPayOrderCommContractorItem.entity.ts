import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MgInvPayOrderCommContractorItem' })
export class LegacyMgInvPayOrderCommContractorItem {
  @PrimaryColumn({ type: 'bigint', name: 'MgInvPayOrderCommContractorItemID' })
  mgInvPayOrderCommContractorItemID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Row' })
  row: number;

  @Column({ type: 'bigint', name: 'StuffReportageNoRef', nullable: true })
  stuffReportageNoRef: number | null;

  @Column({ type: 'character varying', name: 'ContractorServicesRequestNo', nullable: true })
  contractorServicesRequestNo: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ReportageDate', nullable: true })
  reportageDate: Date | null;

  @Column({ type: 'character varying', name: 'ReportageLiableName', nullable: true })
  reportageLiableName: string | null;

  @Column({ type: 'numeric', name: 'ReportageAccessionCent', nullable: true })
  reportageAccessionCent: number | null;

  @Column({ type: 'character varying', name: 'ReportageDescription', nullable: true })
  reportageDescription: string | null;

  @Column({ type: 'character varying', name: 'SupplementalComments', nullable: true })
  supplementalComments: string | null;

  @Column({ type: 'numeric', name: 'PaymentRequestAmount', nullable: true })
  paymentRequestAmount: number | null;

  @Column({ type: 'numeric', name: 'AuthorizedBudgetClose', nullable: true })
  authorizedBudgetClose: number | null;

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

  @Column({ type: 'numeric', name: 'RearPaymentSubjAmount', nullable: true })
  rearPaymentSubjAmount: number | null;

  @Column({ type: 'numeric', name: 'AssurancePerCent', nullable: true })
  assurancePerCent: number | null;

  @Column({ type: 'numeric', name: 'SpecialityBudgetAmount', nullable: true })
  specialityBudgetAmount: number | null;

  @Column({ type: 'numeric', name: 'PaymentBehestSum', nullable: true })
  paymentBehestSum: number | null;

}