import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReferringAttachment' })
export class LegacyReferringAttachment {
  @PrimaryColumn({ type: 'bigint', name: 'ReferringAttachmentID' })
  referringAttachmentID: number;

  @Column({ type: 'bigint', name: 'ReferringRef' })
  referringRef: number;

  @Column({ type: 'bigint', name: 'AttachmentRef' })
  attachmentRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}