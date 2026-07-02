import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidAccessModelGate' })
export class LegacyRfidAccessModelGate {
  @PrimaryColumn({ type: 'bigint', name: 'RfidAccessModelGatelID' })
  rfidAccessModelGatelID: number;

  @Column({ type: 'bigint', name: 'RfidAccessModelRef' })
  rfidAccessModelRef: number;

  @Column({ type: 'bigint', name: 'RfidGateRef' })
  rfidGateRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}