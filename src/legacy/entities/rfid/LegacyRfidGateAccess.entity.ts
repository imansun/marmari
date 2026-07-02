import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidGateAccess' })
export class LegacyRfidGateAccess {
  @PrimaryColumn({ type: 'bigint', name: 'RfidGateAccessID' })
  rfidGateAccessID: number;

  @Column({ type: 'bigint', name: 'RfidCardRef' })
  rfidCardRef: number;

  @Column({ type: 'bigint', name: 'RfidGateRef' })
  rfidGateRef: number;

  @Column({ type: 'character', name: 'Password' })
  password: string;

  @Column({ type: 'integer', name: 'SyncStatusCode' })
  syncStatusCode: number;

  @Column({ type: 'boolean', name: 'Deleted' })
  deleted: boolean;

  @Column({ type: 'boolean', name: 'Sent', nullable: true })
  sent: boolean | null;

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