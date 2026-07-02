import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SignedDocument' })
export class LegacySignedDocument {
  @PrimaryColumn({ type: 'bigint', name: 'SignedDocumentID' })
  signedDocumentID: number;

  @Column({ type: 'bigint', name: 'SignatureTemplateRef' })
  signatureTemplateRef: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'EntityRef' })
  entityRef: number;

  @Column({ type: 'character varying', name: 'DiscriminatorFieldValue', nullable: true })
  discriminatorFieldValue: string | null;

  @Column({ type: 'timestamp without time zone', name: 'SignatureDate' })
  signatureDate: Date;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'timestamp without time zone', name: 'LastVerificationDate', nullable: true })
  lastVerificationDate: Date | null;

  @Column({ type: 'bigint', name: 'LastVerifierRef', nullable: true })
  lastVerifierRef: number | null;

  @Column({ type: 'character varying', name: 'Statement' })
  statement: string;

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