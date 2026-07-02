import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalController_BACKUP' })
export class LegacyRfidLocalControllerBACKUP {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalControllerID' })
  rfidLocalControllerID: number;

  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalEndPointRef' })
  rfidLocalEndPointRef: number;

  @PrimaryColumn({ type: 'integer', name: 'RfidLocalGateCode' })
  rfidLocalGateCode: number;

  @PrimaryColumn({ type: 'character varying', name: 'Title' })
  title: string;

  @PrimaryColumn({ type: 'integer', name: 'Index' })
  index: number;

  @PrimaryColumn({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'FingerPrint' })
  fingerPrint: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'Secured' })
  secured: boolean;

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