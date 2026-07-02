import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Referring' })
export class LegacyReferring {
  @PrimaryColumn({ type: 'bigint', name: 'ReferringID' })
  referringID: number;

  @Column({ type: 'bigint', name: 'ReferringParentRef', nullable: true })
  referringParentRef: number | null;

  @Column({ type: 'bigint', name: 'ReferringRootRef', nullable: true })
  referringRootRef: number | null;

  @Column({ type: 'character varying', name: 'Lineage' })
  lineage: string;

  @Column({ type: 'timestamp without time zone', name: 'SendReceiveDate' })
  sendReceiveDate: Date;

  @Column({ type: 'character varying', name: 'SenderIP' })
  senderIP: string;

  @Column({ type: 'integer', name: 'ActionType' })
  actionType: number;

  @Column({ type: 'bigint', name: 'ReferringUrgencyRef' })
  referringUrgencyRef: number;

  @Column({ type: 'bigint', name: 'ReferringSecurityLevelRef' })
  referringSecurityLevelRef: number;

  @Column({ type: 'boolean', name: 'IsDraft' })
  isDraft: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}