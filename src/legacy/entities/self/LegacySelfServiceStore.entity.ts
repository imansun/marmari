import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceStore' })
export class LegacySelfServiceStore {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceStoreID' })
  selfServiceStoreID: number;

  @Column({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}