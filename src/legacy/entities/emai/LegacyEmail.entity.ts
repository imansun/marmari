import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Email' })
export class LegacyEmail {
  @PrimaryColumn({ type: 'bigint', name: 'EmailID' })
  emailID: number;

  @Column({ type: 'bigint', name: 'EmailAccountRef' })
  emailAccountRef: number;

  @Column({ type: 'bigint', name: 'LetterRef', nullable: true })
  letterRef: number | null;

  @Column({ type: 'character varying', name: 'UniqueId' })
  uniqueId: string;

  @Column({ type: 'character varying', name: 'Subject', nullable: true })
  subject: string | null;

  @Column({ type: 'character varying', name: 'From' })
  from: string;

  @Column({ type: 'character varying', name: 'Receivers' })
  receivers: string;

  @Column({ type: 'character varying', name: 'CC', nullable: true })
  cC: string | null;

  @Column({ type: 'character varying', name: 'BCC', nullable: true })
  bCC: string | null;

  @Column({ type: 'timestamp without time zone', name: 'SendDate' })
  sendDate: Date;

  @Column({ type: 'integer', name: 'Sensitivity' })
  sensitivity: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'integer', name: 'EmailType' })
  emailType: number;

  @Column({ type: 'integer', name: 'FolderType' })
  folderType: number;

  @Column({ type: 'integer', name: 'BodyType' })
  bodyType: number;

  @Column({ type: 'character varying', name: 'XMailer', nullable: true })
  xMailer: string | null;

  @Column({ type: 'boolean', name: 'Recent', nullable: true })
  recent: boolean | null;

  @Column({ type: 'boolean', name: 'Flagged', nullable: true })
  flagged: boolean | null;

  @Column({ type: 'boolean', name: 'Draft', nullable: true })
  draft: boolean | null;

  @Column({ type: 'boolean', name: 'Deleted', nullable: true })
  deleted: boolean | null;

  @Column({ type: 'boolean', name: 'Answered', nullable: true })
  answered: boolean | null;

  @Column({ type: 'boolean', name: 'IsRead', nullable: true })
  isRead: boolean | null;

  @Column({ type: 'boolean', name: 'HasAttachment', nullable: true })
  hasAttachment: boolean | null;

  @Column({ type: 'integer', name: 'ECEType' })
  eCEType: number;

  @Column({ type: 'boolean', name: 'IsBodyHtml', nullable: true })
  isBodyHtml: boolean | null;

  @Column({ type: 'integer', name: 'Size' })
  size: number;

  @Column({ type: 'character varying', name: 'Body', nullable: true })
  body: string | null;

  @Column({ type: 'character varying', name: 'HtmlBody', nullable: true })
  htmlBody: string | null;

  @Column({ type: 'character varying', name: 'NewHtmlBody', nullable: true })
  newHtmlBody: string | null;

  @Column({ type: 'character varying', name: 'HtmlBodyText', nullable: true })
  htmlBodyText: string | null;

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