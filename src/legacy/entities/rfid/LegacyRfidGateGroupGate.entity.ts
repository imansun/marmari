import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidGateGroupGate' })
export class LegacyRfidGateGroupGate {
  @PrimaryColumn({ type: 'bigint', name: 'RfidGateGroupGateID' })
  rfidGateGroupGateID: number;

  @Column({ type: 'bigint', name: 'RfidGateGroupRef' })
  rfidGateGroupRef: number;

  @Column({ type: 'bigint', name: 'RfidGateRef' })
  rfidGateRef: number;

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