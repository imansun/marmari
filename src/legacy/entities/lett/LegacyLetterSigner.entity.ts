import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LetterSigner' })
export class LegacyLetterSigner {
  @PrimaryColumn({ type: 'bigint', name: 'LetterSignerID' })
  letterSignerID: number;

  @Column({ type: 'bigint', name: 'LetterRef' })
  letterRef: number;

  @Column({ type: 'bigint', name: 'SignatureRef', nullable: true })
  signatureRef: number | null;

  @Column({ type: 'bigint', name: 'SignerRef' })
  signerRef: number;

  @Column({ type: 'bigint', name: 'SubstituteRef', nullable: true })
  substituteRef: number | null;

  @Column({ type: 'boolean', name: 'IsMainSigner' })
  isMainSigner: boolean;

  @Column({ type: 'timestamp without time zone', name: 'SignDate', nullable: true })
  signDate: Date | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

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

  @Column({ type: 'boolean', name: 'IncludeSubstituteInfo', nullable: true })
  includeSubstituteInfo: boolean | null;

}