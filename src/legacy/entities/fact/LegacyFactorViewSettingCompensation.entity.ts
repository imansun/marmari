import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FactorViewSettingCompensation' })
export class LegacyFactorViewSettingCompensation {
  @PrimaryColumn({ type: 'bigint', name: 'FactorViewSettingCompensationID' })
  factorViewSettingCompensationID: number;

  @Column({ type: 'bigint', name: 'FactorViewSettingRef' })
  factorViewSettingRef: number;

  @Column({ type: 'bigint', name: 'CompensationFactorRef' })
  compensationFactorRef: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}