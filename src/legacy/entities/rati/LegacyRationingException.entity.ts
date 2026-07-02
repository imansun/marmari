import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RationingException' })
export class LegacyRationingException {
  @PrimaryColumn({ type: 'bigint', name: 'RationingExceptionID' })
  rationingExceptionID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'RationingSettingRef' })
  rationingSettingRef: number;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate', nullable: true })
  toDate: Date | null;

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