import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerGroupIcon' })
export class LegacyCustomerGroupIcon {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerGroupIconID' })
  customerGroupIconID: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'bytea', name: 'Icon' })
  icon: Buffer;

  @Column({ type: 'character varying', name: 'Format' })
  format: string;

  @Column({ type: 'integer', name: 'AnchorX' })
  anchorX: number;

  @Column({ type: 'integer', name: 'AnchorY' })
  anchorY: number;

  @Column({ type: 'integer', name: 'LabelOriginX' })
  labelOriginX: number;

  @Column({ type: 'integer', name: 'LabelOriginY' })
  labelOriginY: number;

  @Column({ type: 'bigint', name: 'GroupRef' })
  groupRef: number;

  @Column({ type: 'bigint', name: 'GroupingRef' })
  groupingRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}