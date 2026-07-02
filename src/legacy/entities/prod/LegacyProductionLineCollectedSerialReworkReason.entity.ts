import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionLineCollectedSerialReworkReason' })
export class LegacyProductionLineCollectedSerialReworkReason {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionLineCollectedSerialReworkReasonID' })
  productionLineCollectedSerialReworkReasonID: number;

  @Column({ type: 'bigint', name: 'ProductionLineCollectedSerialRef' })
  productionLineCollectedSerialRef: number;

  @Column({ type: 'bigint', name: 'ReworkReasonRef' })
  reworkReasonRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}