import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidAccessModelGate_BACKUP' })
export class LegacyRfidAccessModelGateBACKUP {
  @PrimaryColumn({ type: 'bigint', name: 'RfidAccessModelGatelID' })
  rfidAccessModelGatelID: number;

  @PrimaryColumn({ type: 'bigint', name: 'RfidAccessModelRef' })
  rfidAccessModelRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'RfidGateRef' })
  rfidGateRef: number;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

}