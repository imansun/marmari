import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalBiometric' })
export class LegacyRfidLocalBiometric {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalBiometricID' })
  rfidLocalBiometricID: number;

  @Column({ type: 'bigint', name: 'RfidLocalUserInfoRef' })
  rfidLocalUserInfoRef: number;

  @Column({ type: 'smallint', name: 'BiometricType' })
  biometricType: number;

  @Column({ type: 'character varying', name: 'Data', nullable: true })
  data: string | null;

  @Column({ type: 'character varying', name: 'DeviceType' })
  deviceType: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}