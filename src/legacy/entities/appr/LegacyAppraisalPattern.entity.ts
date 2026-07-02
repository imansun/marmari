import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalPattern' })
export class LegacyAppraisalPattern {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalPatternID' })
  appraisalPatternID: number;

  @Column({ type: 'uuid', name: 'TrackingId' })
  trackingId: string;

  @Column({ type: 'boolean', name: 'IsSnapshot' })
  isSnapshot: boolean;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'HasConfirmation' })
  hasConfirmation: boolean;

  @Column({ type: 'boolean', name: 'VisibleToAppraisee' })
  visibleToAppraisee: boolean;

  @Column({ type: 'boolean', name: 'ShowExpectationsDescription' })
  showExpectationsDescription: boolean;

  @Column({ type: 'boolean', name: 'IncludeAgreementIndicators' })
  includeAgreementIndicators: boolean;

  @Column({ type: 'bigint', name: 'IndicatorlessExpectationsIndicatorRef', nullable: true })
  indicatorlessExpectationsIndicatorRef: number | null;

  @Column({ type: 'boolean', name: 'CanReviseByOrganizationHierarchy' })
  canReviseByOrganizationHierarchy: boolean;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}