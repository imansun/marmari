import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldClearDataLog' })
export class LegacyHandheldClearDataLog {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldClearDataLogID' })
  handheldClearDataLogID: number;

  @Column({ type: 'timestamp without time zone', name: 'Date', nullable: true })
  date: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'InstallDate', nullable: true })
  installDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'HandheldDeviceRef' })
  handheldDeviceRef: number;

}