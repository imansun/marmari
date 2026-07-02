import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ManufacturingOrderSerialSetting' })
export class LegacyManufacturingOrderSerialSetting {
  @PrimaryColumn({ type: 'bigint', name: 'ManufacturingOrderSerialSettingID' })
  manufacturingOrderSerialSettingID: number;

  @Column({ type: 'bigint', name: 'ManufacturingOrderRef' })
  manufacturingOrderRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}