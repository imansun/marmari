import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReworkProductionLineCollectedSerialPrimaryPLCSInfo' })
export class LegacyReworkProductionLineCollectedSerialPrimaryPLCSInfo {
  @PrimaryColumn({ type: 'bigint', name: 'ReworkProductionLineCollectedSerialPrimaryPLCSInfoID' })
  reworkProductionLineCollectedSerialPrimaryPLCSInfoID: number;

  @Column({ type: 'bigint', name: 'ProductionLineCollectedSerialRef' })
  productionLineCollectedSerialRef: number;

  @Column({ type: 'bigint', name: 'FirstReadPrimaryProductionLineCollectedSerialRef' })
  firstReadPrimaryProductionLineCollectedSerialRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}