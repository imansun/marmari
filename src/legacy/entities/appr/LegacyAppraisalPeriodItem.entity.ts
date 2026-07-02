import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalPeriodItem' })
export class LegacyAppraisalPeriodItem {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalPeriodItemID' })
  appraisalPeriodItemID: number;

  @Column({ type: 'bigint', name: 'AppraisalPeriodRef' })
  appraisalPeriodRef: number;

  @Column({ type: 'bigint', name: 'AppraisalFormTemplateRef' })
  appraisalFormTemplateRef: number;

  @Column({ type: 'bigint', name: 'AppraiseeConditionsRef' })
  appraiseeConditionsRef: number;

  @Column({ type: 'bigint', name: 'AppraiserConditionsRef' })
  appraiserConditionsRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}