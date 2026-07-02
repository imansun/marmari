import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailOfflineData' })
export class LegacyRetailOfflineData {
  @PrimaryColumn({ type: 'bigint', name: 'RetailOfflineDataID' })
  retailOfflineDataID: number;

  @Column({ type: 'bigint', name: 'BatchNumber' })
  batchNumber: number;

  @Column({ type: 'character varying', name: 'Content' })
  content: string;

  @Column({ type: 'character varying', name: 'DataTypeName' })
  dataTypeName: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'Error', nullable: true })
  error: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}