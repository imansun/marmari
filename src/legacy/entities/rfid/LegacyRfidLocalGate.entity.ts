import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalGate' })
export class LegacyRfidLocalGate {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalGateID' })
  rfidLocalGateID: number;

  @Column({ type: 'integer', name: 'Code' })
  code: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'MinimumIntervalMinutes' })
  minimumIntervalMinutes: number;

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