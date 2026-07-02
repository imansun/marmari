import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OfflineDeletedRecordItem' })
export class LegacyOfflineDeletedRecordItem {
  @PrimaryColumn({ type: 'bigint', name: 'OfflineDeletedRecordItemID' })
  offlineDeletedRecordItemID: number;

  @Column({ type: 'bigint', name: 'OfflineDeletedRecordsRef' })
  offlineDeletedRecordsRef: number;

  @Column({ type: 'bigint', name: 'CashRegisterRef' })
  cashRegisterRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

}