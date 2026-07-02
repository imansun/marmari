import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionLineCollectedSerialAdditionalSerial' })
export class LegacyProductionLineCollectedSerialAdditionalSerial {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionLineCollectedSerialAdditionalSerialID' })
  productionLineCollectedSerialAdditionalSerialID: number;

  @Column({ type: 'bigint', name: 'AdditionalSerialRef' })
  additionalSerialRef: number;

  @Column({ type: 'bigint', name: 'ProductionLineCollectedSerialRef' })
  productionLineCollectedSerialRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}