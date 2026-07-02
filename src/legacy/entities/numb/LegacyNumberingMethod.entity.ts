import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NumberingMethod' })
export class LegacyNumberingMethod {
  @PrimaryColumn({ type: 'bigint', name: 'NumberingMethodID' })
  numberingMethodID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

  @Column({ type: 'bigint', name: 'SerialPoolRef' })
  serialPoolRef: number;

  @Column({ type: 'bigint', name: 'SecretariatRef', nullable: true })
  secretariatRef: number | null;

  @Column({ type: 'bigint', name: 'NumberingPatternRef' })
  numberingPatternRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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