import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntitySegmentSetting' })
export class LegacyEntitySegmentSetting {
  @PrimaryColumn({ type: 'bigint', name: 'EntitySegmentSettingID' })
  entitySegmentSettingID: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'Discriminator', nullable: true })
  discriminator: number | null;

  @Column({ type: 'boolean', name: 'IsShared', default: true })
  isShared: boolean;

  @Column({ type: 'boolean', name: 'IsCompanyBase', default: true })
  isCompanyBase: boolean;

  @Column({ type: 'boolean', name: 'IsLedgerBase', default: true })
  isLedgerBase: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}