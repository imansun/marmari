import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmailAttachment' })
export class LegacyEmailAttachment {
  @PrimaryColumn({ type: 'bigint', name: 'EmailAttachmentID' })
  emailAttachmentID: number;

  @Column({ type: 'bigint', name: 'EmailRef' })
  emailRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'integer', name: 'Size' })
  size: number;

  @Column({ type: 'character varying', name: 'ContentType' })
  contentType: string;

  @Column({ type: 'uuid', name: 'ContentGuid', nullable: true })
  contentGuid: string | null;

  @Column({ type: 'character varying', name: 'ContentID', nullable: true })
  contentID: string | null;

  @Column({ type: 'boolean', name: 'IsEmbeddedMessage', nullable: true })
  isEmbeddedMessage: boolean | null;

  @Column({ type: 'boolean', name: 'IsInlineImage', nullable: true })
  isInlineImage: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}