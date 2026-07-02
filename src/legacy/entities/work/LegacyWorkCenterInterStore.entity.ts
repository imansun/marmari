import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkCenterInterStore' })
export class LegacyWorkCenterInterStore {
  @PrimaryColumn({ type: 'bigint', name: 'WorkCenterInterStoreID' })
  workCenterInterStoreID: number;

  @Column({ type: 'bigint', name: 'WorkCenterRef' })
  workCenterRef: number;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}