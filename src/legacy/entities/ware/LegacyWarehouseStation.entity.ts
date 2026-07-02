import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WarehouseStation' })
export class LegacyWarehouseStation {
  @PrimaryColumn({ type: 'bigint', name: 'WarehouseStationID' })
  warehouseStationID: number;

  @Column({ type: 'bigint', name: 'StoreStructureRef' })
  storeStructureRef: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Type', nullable: true })
  type: number | null;

  @Column({ type: 'integer', name: 'GroupNumber', nullable: true })
  groupNumber: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}