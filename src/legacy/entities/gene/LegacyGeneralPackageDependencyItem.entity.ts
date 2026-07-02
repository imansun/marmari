import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GeneralPackageDependencyItem' })
export class LegacyGeneralPackageDependencyItem {
  @PrimaryColumn({ type: 'bigint', name: 'GeneralPackageDependencyItemID' })
  generalPackageDependencyItemID: number;

  @Column({ type: 'bigint', name: 'GeneralPackageItemRef' })
  generalPackageItemRef: number;

  @Column({ type: 'bigint', name: 'GeneralPackageDependencyRef' })
  generalPackageDependencyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}