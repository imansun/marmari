import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductPackaging' })
export class LegacyProductPackaging {
  @PrimaryColumn({ type: 'bigint', name: 'ProductPackagingID' })
  productPackagingID: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'PackageRef' })
  packageRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}