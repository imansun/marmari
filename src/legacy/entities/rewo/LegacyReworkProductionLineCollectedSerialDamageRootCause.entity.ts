import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReworkProductionLineCollectedSerialDamageRootCause' })
export class LegacyReworkProductionLineCollectedSerialDamageRootCause {
  @PrimaryColumn({ type: 'bigint', name: 'ReworkProductionLineCollectedSerialDamageRootCauseID' })
  reworkProductionLineCollectedSerialDamageRootCauseID: number;

  @Column({ type: 'bigint', name: 'ProductionLineCollectedSerialRef' })
  productionLineCollectedSerialRef: number;

  @Column({ type: 'bigint', name: 'DamageRootCauseRef' })
  damageRootCauseRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}