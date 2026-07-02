import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrganizationalStructureDescription' })
export class LegacyOrganizationalStructureDescription {
  @PrimaryColumn({ type: 'bigint', name: 'OrganizationalStructureDescriptionID' })
  organizationalStructureDescriptionID: number;

  @Column({ type: 'timestamp without time zone', name: 'ChangeDate' })
  changeDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Attachment', nullable: true })
  attachment: Buffer | null;

  @Column({ type: 'character varying', name: 'AttachmentName', nullable: true })
  attachmentName: string | null;

}