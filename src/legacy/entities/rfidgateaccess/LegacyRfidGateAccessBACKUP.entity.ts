import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidGateAccess_BACKUP' })
export class LegacyRfidGateAccessBACKUP {
  @PrimaryColumn({ type: 'bigint', name: 'RfidGateAccessID' })
  rfidGateAccessID: number;

  @PrimaryColumn({ type: 'bigint', name: 'RfidCardRef' })
  rfidCardRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'RfidGateRef' })
  rfidGateRef: number;

  @PrimaryColumn({ type: 'character', name: 'Password' })
  password: string;

  @PrimaryColumn({ type: 'integer', name: 'SyncStatusCode' })
  syncStatusCode: number;

  @PrimaryColumn({ type: 'boolean', name: 'Deleted' })
  deleted: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'Sent' })
  sent: boolean | null;

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