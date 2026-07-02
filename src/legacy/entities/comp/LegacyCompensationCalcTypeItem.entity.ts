import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CompensationCalcTypeItem' })
export class LegacyCompensationCalcTypeItem {
  @PrimaryColumn({ type: 'bigint', name: 'CompensationCalcTypeItemID' })
  compensationCalcTypeItemID: number;

  @Column({ type: 'bigint', name: 'CompensationCalcTypeRef' })
  compensationCalcTypeRef: number;

  @Column({ type: 'bigint', name: 'EmploymentTypeRef', nullable: true })
  employmentTypeRef: number | null;

  @Column({ type: 'integer', name: 'DeferredConditionType' })
  deferredConditionType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}