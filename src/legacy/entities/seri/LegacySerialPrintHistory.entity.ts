import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialPrintHistory' })
export class LegacySerialPrintHistory {
  @PrimaryColumn({ type: 'bigint', name: 'SerialPrintHistoryID' })
  serialPrintHistoryID: number;

  @Column({ type: 'bigint', name: 'SerialRef' })
  serialRef: number;

  @Column({ type: 'timestamp without time zone', name: 'PrintDate' })
  printDate: Date;

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