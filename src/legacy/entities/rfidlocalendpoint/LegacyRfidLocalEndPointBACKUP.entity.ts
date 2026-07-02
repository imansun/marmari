import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalEndPoint_BACKUP' })
export class LegacyRfidLocalEndPointBACKUP {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalEndPointID' })
  rfidLocalEndPointID: number;

  @PrimaryColumn({ type: 'integer', name: 'SdkTypeCode' })
  sdkTypeCode: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'SdkType' })
  sdkType: string;

  @PrimaryColumn({ type: 'character varying', name: 'IP' })
  iP: string;

  @PrimaryColumn({ type: 'integer', name: 'Port' })
  port: number;

  @PrimaryColumn({ type: 'character varying', name: 'Title' })
  title: string;

  @PrimaryColumn({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @PrimaryColumn({ type: 'character varying', name: 'Description' })
  description: string | null;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'Creator' })
  creator: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}