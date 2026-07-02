import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CommissionReviewSetting' })
export class LegacyCommissionReviewSetting {
  @PrimaryColumn({ type: 'bigint', name: 'CommissionReviewSettingID' })
  commissionReviewSettingID: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'integer', name: 'CommissionTargetType' })
  commissionTargetType: number;

  @Column({ type: 'integer', name: 'FactorType' })
  factorType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}