import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalGate_BACKUP' })
export class LegacyRfidLocalGateBACKUP {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalGateID' })
  rfidLocalGateID: number;

  @PrimaryColumn({ type: 'integer', name: 'Code' })
  code: number;

  @PrimaryColumn({ type: 'character varying', name: 'Title' })
  title: string;

  @PrimaryColumn({ type: 'integer', name: 'MinimumIntervalMinutes' })
  minimumIntervalMinutes: number;

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