import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesMtoSpecificationItem' })
export class LegacySalesMtoSpecificationItem {
  @PrimaryColumn({ type: 'bigint', name: 'SalesMtoSpecificationItemID' })
  salesMtoSpecificationItemID: number;

  @Column({ type: 'bigint', name: 'SalesMtoSpecificationRef' })
  salesMtoSpecificationRef: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'bigint', name: 'CharacteristicItemRef', nullable: true })
  characteristicItemRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'integer', name: 'Group' })
  group: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

}