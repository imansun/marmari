import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Catalog' })
export class LegacyCatalog {
  @PrimaryColumn({ type: 'bigint', name: 'CatalogID' })
  catalogID: number;

  @Column({ type: 'bigint', name: 'SupplierRef', nullable: true })
  supplierRef: number | null;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'LastVersion' })
  lastVersion: number;

  @Column({ type: 'timestamp without time zone', name: 'PublishedDate' })
  publishedDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'DownloadDate' })
  downloadDate: Date;

  @Column({ type: 'character varying', name: 'TraceID' })
  traceID: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Message', nullable: true })
  message: string | null;

  @Column({ type: 'character varying', name: 'SupplierNationalID', nullable: true })
  supplierNationalID: string | null;

  @Column({ type: 'character varying', name: 'SupplierName', nullable: true })
  supplierName: string | null;

}