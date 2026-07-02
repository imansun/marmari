import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PermissionRequest' })
export class LegacyPermissionRequest {
  @PrimaryColumn({ type: 'bigint', name: 'PermissionRequestID' })
  permissionRequestID: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'PermissionRequestRef', nullable: true })
  permissionRequestRef: number | null;

  @Column({ type: 'character varying', name: 'PermissionLetterNumber', nullable: true })
  permissionLetterNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'MeetingRecordDate', nullable: true })
  meetingRecordDate: Date | null;

  @Column({ type: 'integer', name: 'RequestType' })
  requestType: number;

  @Column({ type: 'character varying', name: 'OrganizationNoticeLetterNumber' })
  organizationNoticeLetterNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'OrganizationNoticeLetterDate' })
  organizationNoticeLetterDate: Date;

  @Column({ type: 'character varying', name: 'AuthorizedAuthorityLetterNumber' })
  authorizedAuthorityLetterNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'AuthorizedAuthorityLetterDate' })
  authorizedAuthorityLetterDate: Date;

  @Column({ type: 'character varying', name: 'AssetMinistryNoticeLetterNumber' })
  assetMinistryNoticeLetterNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'AssetMinistryNoticeLetterDate' })
  assetMinistryNoticeLetterDate: Date;

  @Column({ type: 'character varying', name: 'AuditCourtVoteNumber', nullable: true })
  auditCourtVoteNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'AuditCourtVoteDate', nullable: true })
  auditCourtVoteDate: Date | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Approver', nullable: true })
  approver: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ApprovalDate', nullable: true })
  approvalDate: Date | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}