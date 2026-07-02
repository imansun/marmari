import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ScanCenter' })
export class LegacyScanCenter {
  @PrimaryColumn({ type: 'bigint', name: 'ScanCenterID' })
  scanCenterID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'AgentID' })
  agentID: string;

  @Column({ type: 'character varying', name: 'AgentAddresses' })
  agentAddresses: string;

  @Column({ type: 'character varying', name: 'AgentFQDN', nullable: true })
  agentFQDN: string | null;

  @Column({ type: 'character varying', name: 'DeviceName', nullable: true })
  deviceName: string | null;

  @Column({ type: 'character varying', name: 'ProductFamily', nullable: true })
  productFamily: string | null;

  @Column({ type: 'character varying', name: 'Manufacturer', nullable: true })
  manufacturer: string | null;

  @Column({ type: 'character varying', name: 'Orientation', nullable: true })
  orientation: string | null;

  @Column({ type: 'boolean', name: 'FlatbedEnabled', nullable: true })
  flatbedEnabled: boolean | null;

  @Column({ type: 'boolean', name: 'FeederEnabled', nullable: true })
  feederEnabled: boolean | null;

  @Column({ type: 'boolean', name: 'DuplexEnabled', nullable: true })
  duplexEnabled: boolean | null;

  @Column({ type: 'character varying', name: 'SupportedDPI', nullable: true })
  supportedDPI: string | null;

  @Column({ type: 'character varying', name: 'SupportedDepth', nullable: true })
  supportedDepth: string | null;

  @Column({ type: 'character varying', name: 'SupportedPaperSize', nullable: true })
  supportedPaperSize: string | null;

  @Column({ type: 'character varying', name: 'SupportedFileFormat', nullable: true })
  supportedFileFormat: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastStateChangeDate' })
  lastStateChangeDate: Date;

  @Column({ type: 'bigint', name: 'LastStateChanger' })
  lastStateChanger: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}