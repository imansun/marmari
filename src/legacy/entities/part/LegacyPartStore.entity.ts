import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartStore' })
export class LegacyPartStore {
  @PrimaryColumn({ type: 'bigint', name: 'PartStoreID' })
  partStoreID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

  @Column({ type: 'bigint', name: 'PositionRef', nullable: true })
  positionRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}