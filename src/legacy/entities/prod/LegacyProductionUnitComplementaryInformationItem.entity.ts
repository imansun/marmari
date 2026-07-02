import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionUnitComplementaryInformationItem' })
export class LegacyProductionUnitComplementaryInformationItem {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionUnitComplementaryInformationItemID' })
  productionUnitComplementaryInformationItemID: number;

  @Column({ type: 'bigint', name: 'ProductionUnitComplementaryInformationRef' })
  productionUnitComplementaryInformationRef: number;

  @Column({ type: 'integer', name: 'Rank' })
  rank: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}