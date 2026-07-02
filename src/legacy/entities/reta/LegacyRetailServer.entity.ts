import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailServer' })
export class LegacyRetailServer {
  @PrimaryColumn({ type: 'bigint', name: 'RetailServerID' })
  retailServerID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'boolean', name: 'IsMainServer' })
  isMainServer: boolean;

  @Column({ type: 'character varying', name: 'DataTransferAddress' })
  dataTransferAddress: string;

  @Column({ type: 'character varying', name: 'OnlineServiceAddress' })
  onlineServiceAddress: string;

  @Column({ type: 'character varying', name: 'UniqueIdentifier' })
  uniqueIdentifier: string;

  @Column({ type: 'integer', name: 'SiteID' })
  siteID: number;

  @Column({ type: 'character varying', name: 'CertificateThumbprint' })
  certificateThumbprint: string;

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

  @Column({ type: 'character varying', name: 'OnlineServicePath', nullable: true })
  onlineServicePath: string | null;

}