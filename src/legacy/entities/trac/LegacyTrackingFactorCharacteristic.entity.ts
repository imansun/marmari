import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TrackingFactorCharacteristic' })
export class LegacyTrackingFactorCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'TrackingFactorID' })
  trackingFactorID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'IsSyntheticStore', default: false })
  isSyntheticStore: boolean;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}