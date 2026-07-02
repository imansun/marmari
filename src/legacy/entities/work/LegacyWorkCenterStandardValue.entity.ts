import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkCenterStandardValue' })
export class LegacyWorkCenterStandardValue {
  @PrimaryColumn({ type: 'bigint', name: 'WorkCenterStandardValueID' })
  workCenterStandardValueID: number;

  @Column({ type: 'bigint', name: 'WorkCenterRef' })
  workCenterRef: number;

  @Column({ type: 'bigint', name: 'StandardValueRef' })
  standardValueRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}