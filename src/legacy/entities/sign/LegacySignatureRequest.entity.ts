import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SignatureRequest' })
export class LegacySignatureRequest {
  @PrimaryColumn({ type: 'bigint', name: 'SignatureRequestID' })
  signatureRequestID: number;

  @Column({ type: 'bigint', name: 'SignatureTemplateRef' })
  signatureTemplateRef: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'EntityRef' })
  entityRef: number;

  @Column({ type: 'character varying', name: 'DiscriminatorFieldValue', nullable: true })
  discriminatorFieldValue: string | null;

  @Column({ type: 'bigint', name: 'RequesterRef' })
  requesterRef: number;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate' })
  requestDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ConclusionDate', nullable: true })
  conclusionDate: Date | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'character varying', name: 'Statement' })
  statement: string;

  @Column({ type: 'character varying', name: 'SignableStates' })
  signableStates: string;

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