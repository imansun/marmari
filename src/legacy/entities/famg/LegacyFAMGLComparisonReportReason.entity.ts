import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FAMGLComparisonReportReason' })
export class LegacyFAMGLComparisonReportReason {
  @PrimaryColumn({ type: 'bigint', name: 'FAMGLComparisonReportReasonID' })
  fAMGLComparisonReportReasonID: number;

  @Column({ type: 'bigint', name: 'FAMGLComparisonReportItemRef' })
  fAMGLComparisonReportItemRef: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'character varying', name: 'DocumentNumber' })
  documentNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'DocumentDate' })
  documentDate: Date;

  @Column({ type: 'character varying', name: 'ComponentName' })
  componentName: string;

  @Column({ type: 'character varying', name: 'EntityName' })
  entityName: string;

  @Column({ type: 'bigint', name: 'EntityID' })
  entityID: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'boolean', name: 'AllowInDebit' })
  allowInDebit: boolean;

  @Column({ type: 'boolean', name: 'AllowInCredit' })
  allowInCredit: boolean;

  @Column({ type: 'bigint', name: 'VoucherRef', nullable: true })
  voucherRef: number | null;

  @Column({ type: 'bigint', name: 'BranchRef', default: 0 })
  branchRef: number;

}