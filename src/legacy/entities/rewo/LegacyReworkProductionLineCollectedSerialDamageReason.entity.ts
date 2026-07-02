import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReworkProductionLineCollectedSerialDamageReason' })
export class LegacyReworkProductionLineCollectedSerialDamageReason {
  @PrimaryColumn({ type: 'bigint', name: 'ReworkProductionLineCollectedSerialDamageReasonID' })
  reworkProductionLineCollectedSerialDamageReasonID: number;

  @Column({ type: 'bigint', name: 'ProductionLineCollectedSerialRef' })
  productionLineCollectedSerialRef: number;

  @Column({ type: 'bigint', name: 'DamageReasonRef' })
  damageReasonRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}