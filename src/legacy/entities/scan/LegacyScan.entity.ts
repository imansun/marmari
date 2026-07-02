import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Scan' })
export class LegacyScan {
  @PrimaryColumn({ type: 'bigint', name: 'ScanID' })
  scanID: number;

  @Column({ type: 'bigint', name: 'ScanCenterRef' })
  scanCenterRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ScanDate' })
  scanDate: Date;

  @Column({ type: 'integer', name: 'TotalPages' })
  totalPages: number;

  @Column({ type: 'integer', name: 'ScanVolume' })
  scanVolume: number;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'character varying', name: 'ErrorMessage', nullable: true })
  errorMessage: string | null;

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

  @Column({ type: 'bigint', name: 'PerformerRef', nullable: true })
  performerRef: number | null;

}