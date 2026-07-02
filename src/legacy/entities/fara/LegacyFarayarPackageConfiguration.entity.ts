import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FarayarPackageConfiguration' })
export class LegacyFarayarPackageConfiguration {
  @PrimaryColumn({ type: 'bigint', name: 'FarayarUserConfigurationID' })
  farayarUserConfigurationID: number;

  @Column({ type: 'bigint', name: 'FarayarPackageRef' })
  farayarPackageRef: number;

  @Column({ type: 'character varying', name: 'Configuration' })
  configuration: string;

  @Column({ type: 'character varying', name: 'Element' })
  element: string;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}