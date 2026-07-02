import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Letter' })
export class LegacyLetter {
  @PrimaryColumn({ type: 'bigint', name: 'LetterID' })
  letterID: number;

  @Column({ type: 'integer', name: 'LetterType' })
  letterType: number;

  @Column({ type: 'bigint', name: 'CreatorRef', nullable: true })
  creatorRef: number | null;

  @Column({ type: 'bigint', name: 'SenderRef', nullable: true })
  senderRef: number | null;

  @Column({ type: 'bigint', name: 'ActorRef', nullable: true })
  actorRef: number | null;

  @Column({ type: 'bigint', name: 'SecuretyLevelRef', nullable: true })
  securetyLevelRef: number | null;

  @Column({ type: 'bigint', name: 'SecretariatRef', nullable: true })
  secretariatRef: number | null;

  @Column({ type: 'bigint', name: 'NumberingMethodRef', nullable: true })
  numberingMethodRef: number | null;

  @Column({ type: 'integer', name: 'Language' })
  language: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'RegistrationNumber', nullable: true })
  registrationNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'RegistrationDate', nullable: true })
  registrationDate: Date | null;

  @Column({ type: 'character varying', name: 'BaseLetterNumber', nullable: true })
  baseLetterNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'BaseLetterDate', nullable: true })
  baseLetterDate: Date | null;

  @Column({ type: 'character varying', name: 'Subject', nullable: true })
  subject: string | null;

  @Column({ type: 'character varying', name: 'Keyword', nullable: true })
  keyword: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'CancelerRef', nullable: true })
  cancelerRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CancelDate', nullable: true })
  cancelDate: Date | null;

  @Column({ type: 'character varying', name: 'CancelReason', nullable: true })
  cancelReason: string | null;

  @Column({ type: 'integer', name: 'StateBeforCancel', nullable: true })
  stateBeforCancel: number | null;

  @Column({ type: 'character varying', name: 'ReciversName', nullable: true })
  reciversName: string | null;

  @Column({ type: 'character varying', name: 'TranscriptsName', nullable: true })
  transcriptsName: string | null;

  @Column({ type: 'character varying', name: 'FollowersName', nullable: true })
  followersName: string | null;

  @Column({ type: 'character varying', name: 'SignersName', nullable: true })
  signersName: string | null;

  @Column({ type: 'bigint', name: 'UrgencyRef', nullable: true })
  urgencyRef: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'boolean', name: 'HasContent' })
  hasContent: boolean;

  @Column({ type: 'bigint', name: 'ECEIncomingRef', nullable: true })
  eCEIncomingRef: number | null;

  @Column({ type: 'character varying', name: 'ECEIncomingSender', nullable: true })
  eCEIncomingSender: string | null;

  @Column({ type: 'character varying', name: 'ECEIncomingReceiverCode', nullable: true })
  eCEIncomingReceiverCode: string | null;

  @Column({ type: 'character varying', name: 'ECEEmailAccountName', nullable: true })
  eCEEmailAccountName: string | null;

  @Column({ type: 'character varying', name: 'ECEOutgoingReceiversNames', nullable: true })
  eCEOutgoingReceiversNames: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ECESendReceiveDate', nullable: true })
  eCESendReceiveDate: Date | null;

  @Column({ type: 'character varying', name: 'ECELastDistributionState', nullable: true })
  eCELastDistributionState: string | null;

  @Column({ type: 'boolean', name: 'DistributedByECE' })
  distributedByECE: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}