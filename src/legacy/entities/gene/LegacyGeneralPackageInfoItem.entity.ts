import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GeneralPackageInfoItem' })
export class LegacyGeneralPackageInfoItem {
  @PrimaryColumn({ type: 'bigint', name: 'GeneralPackageInfoItemID' })
  generalPackageInfoItemID: number;

  @Column({ type: 'bigint', name: 'GeneralPackageItemRef' })
  generalPackageItemRef: number;

  @Column({ type: 'bigint', name: 'GeneralPackageInfoRef' })
  generalPackageInfoRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}