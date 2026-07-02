import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RoutingProductSerialSetting' })
export class LegacyRoutingProductSerialSetting {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingProductSerialSettingID' })
  routingProductSerialSettingID: number;

  @Column({ type: 'bigint', name: 'RoutingProductRef' })
  routingProductRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}