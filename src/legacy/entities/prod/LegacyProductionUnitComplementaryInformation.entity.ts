import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionUnitComplementaryInformation' })
export class LegacyProductionUnitComplementaryInformation {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionUnitComplementaryInformationID' })
  productionUnitComplementaryInformationID: number;

  @Column({ type: 'bigint', name: 'ProductionUnitRef' })
  productionUnitRef: number;

  @Column({ type: 'integer', name: 'Number' })
  number: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}