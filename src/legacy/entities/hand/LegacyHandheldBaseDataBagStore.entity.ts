import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldBaseDataBagStore' })
export class LegacyHandheldBaseDataBagStore {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldBaseDataBagStoreID' })
  handheldBaseDataBagStoreID: number;

  @Column({ type: 'bigint', name: 'HandheldBaseDataBagRef' })
  handheldBaseDataBagRef: number;

  @Column({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}