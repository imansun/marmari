import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartTemplateStore' })
export class LegacyPartTemplateStore {
  @PrimaryColumn({ type: 'bigint', name: 'PartTemplateStoreID' })
  partTemplateStoreID: number;

  @Column({ type: 'bigint', name: 'PartTemplateRef' })
  partTemplateRef: number;

  @Column({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}