import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FactorViewSetting' })
export class LegacyFactorViewSetting {
  @PrimaryColumn({ type: 'bigint', name: 'FactorViewSettingID' })
  factorViewSettingID: number;

  @Column({ type: 'bigint', name: 'FactorViewSettingTypeRef' })
  factorViewSettingTypeRef: number;

  @Column({ type: 'bigint', name: 'FactorTypeRef', nullable: true })
  factorTypeRef: number | null;

  @Column({ type: 'bigint', name: 'UserRef', nullable: true })
  userRef: number | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'IsUserLevel' })
  isUserLevel: boolean;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}