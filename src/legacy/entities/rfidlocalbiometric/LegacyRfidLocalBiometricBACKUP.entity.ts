import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalBiometric_BACKUP' })
export class LegacyRfidLocalBiometricBACKUP {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalBiometricID' })
  rfidLocalBiometricID: number;

  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalUserInfoRef' })
  rfidLocalUserInfoRef: number;

  @PrimaryColumn({ type: 'smallint', name: 'BiometricType' })
  biometricType: number;

  @PrimaryColumn({ type: 'character varying', name: 'Data' })
  data: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DeviceType' })
  deviceType: string;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

}