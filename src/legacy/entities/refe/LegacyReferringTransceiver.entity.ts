import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReferringTransceiver' })
export class LegacyReferringTransceiver {
  @PrimaryColumn({ type: 'bigint', name: 'ReferringTransceiverID' })
  referringTransceiverID: number;

  @Column({ type: 'bigint', name: 'ReferringRef' })
  referringRef: number;

  @Column({ type: 'character varying', name: 'Subject', nullable: true })
  subject: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'CorrespondentRef' })
  correspondentRef: number;

  @Column({ type: 'bigint', name: 'DelegateeRef', nullable: true })
  delegateeRef: number | null;

  @Column({ type: 'character varying', name: 'VisibleReceiverNames', nullable: true })
  visibleReceiverNames: string | null;

  @Column({ type: 'character varying', name: 'VisibleCCNames', nullable: true })
  visibleCCNames: string | null;

  @Column({ type: 'character varying', name: 'VisibleFollowerNames', nullable: true })
  visibleFollowerNames: string | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'boolean', name: 'IsPrivate' })
  isPrivate: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}