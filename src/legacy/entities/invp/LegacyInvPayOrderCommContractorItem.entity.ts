import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvPayOrderCommContractorItem' })
export class LegacyInvPayOrderCommContractorItem {
  @PrimaryColumn({ type: 'bigint', name: 'InvPayOrderCommContractorItemID' })
  invPayOrderCommContractorItemID: number;

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

  @Column({ type: 'character varying', name: 'ReportageLiable', nullable: true })
  reportageLiable: string | null;

  @Column({ type: 'numeric', name: 'ReportageDrzmanStuffAccessionCent', nullable: true })
  reportageDrzmanStuffAccessionCent: number | null;

  @Column({ type: 'character varying', name: 'ReportageDescription', nullable: true })
  reportageDescription: string | null;

  @Column({ type: 'character varying', name: 'SupplementalComments', nullable: true })
  supplementalComments: string | null;

  @Column({ type: 'numeric', name: 'PaymentRequestAmount', nullable: true })
  paymentRequestAmount: number | null;

  @Column({ type: 'numeric', name: 'ReportageAccessionCent', nullable: true })
  reportageAccessionCent: number | null;

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

  @Column({ type: 'numeric', name: 'RearPaymentSubAmount', nullable: true })
  rearPaymentSubAmount: number | null;

  @Column({ type: 'numeric', name: 'AssuranceDroitCent', nullable: true })
  assuranceDroitCent: number | null;

  @Column({ type: 'numeric', name: 'IsEntryHeyPaymentBehestSum', nullable: true })
  isEntryHeyPaymentBehestSum: number | null;

  @Column({ type: 'numeric', name: 'SpecialityBudgetAmount', nullable: true })
  specialityBudgetAmount: number | null;

}