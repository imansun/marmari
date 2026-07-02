import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ExitPermissionReq' })
export class LegacyExitPermissionReq {
  @PrimaryColumn({ type: 'bigint', name: 'ExitPermissionReqID' })
  exitPermissionReqID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'RequestNo' })
  requestNo: string;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate', nullable: true })
  requestDate: Date | null;

  @Column({ type: 'character varying', name: 'FlyingContactNo', nullable: true })
  flyingContactNo: string | null;

  @Column({ type: 'integer', name: 'Alpha', nullable: true })
  alpha: number | null;

  @Column({ type: 'integer', name: 'Cessation', nullable: true })
  cessation: number | null;

  @Column({ type: 'character varying', name: 'DomesticNameAndName', nullable: true })
  domesticNameAndName: string | null;

  @Column({ type: 'character varying', name: 'NationalCode', nullable: true })
  nationalCode: string | null;

  @Column({ type: 'character varying', name: 'EgressAgument', nullable: true })
  egressAgument: string | null;

  @Column({ type: 'character varying', name: 'Scum', nullable: true })
  scum: string | null;

  @Column({ type: 'bigint', name: 'PersonnelNoRef1Ref', nullable: true })
  personnelNoRef1Ref: number | null;

  @Column({ type: 'character varying', name: 'Employ', nullable: true })
  employ: string | null;

  @Column({ type: 'character varying', name: 'InstitutionalCredit', nullable: true })
  institutionalCredit: string | null;

  @Column({ type: 'character varying', name: 'RecruitmentKind', nullable: true })
  recruitmentKind: string | null;

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

  @Column({ type: 'character varying', name: 'SupplementalComments', nullable: true })
  supplementalComments: string | null;

  @Column({ type: 'character varying', name: 'PerTrahyshdh', nullable: true })
  perTrahyshdh: string | null;

  @Column({ type: 'integer', name: 'ServiceSlot1', nullable: true })
  serviceSlot1: number | null;

  @Column({ type: 'bigint', name: 'HeirRef3Ref', nullable: true })
  heirRef3Ref: number | null;

  @Column({ type: 'bigint', name: 'EmPerCode1Ref', nullable: true })
  emPerCode1Ref: number | null;

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