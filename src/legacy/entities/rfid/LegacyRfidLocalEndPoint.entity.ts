import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalEndPoint' })
export class LegacyRfidLocalEndPoint {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalEndPointID' })
  rfidLocalEndPointID: number;

  @Column({ type: 'integer', name: 'SdkTypeCode', nullable: true })
  sdkTypeCode: number | null;

  @Column({ type: 'character varying', name: 'SdkType' })
  sdkType: string;

  @Column({ type: 'character varying', name: 'IP' })
  iP: string;

  @Column({ type: 'integer', name: 'Port' })
  port: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}