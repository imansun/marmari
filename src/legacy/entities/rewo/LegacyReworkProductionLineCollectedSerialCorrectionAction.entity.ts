import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReworkProductionLineCollectedSerialCorrectionAction' })
export class LegacyReworkProductionLineCollectedSerialCorrectionAction {
  @PrimaryColumn({ type: 'bigint', name: 'ReworkProductionLineCollectedSerialCorrectionActionID' })
  reworkProductionLineCollectedSerialCorrectionActionID: number;

  @Column({ type: 'bigint', name: 'ProductionLineCollectedSerialRef' })
  productionLineCollectedSerialRef: number;

  @Column({ type: 'bigint', name: 'CorrectionActionRef' })
  correctionActionRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}