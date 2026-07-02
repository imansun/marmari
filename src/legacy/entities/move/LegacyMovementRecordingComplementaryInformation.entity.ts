import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MovementRecordingComplementaryInformation' })
export class LegacyMovementRecordingComplementaryInformation {
  @PrimaryColumn({ type: 'bigint', name: 'MovementRecordingComplementaryInformationID' })
  movementRecordingComplementaryInformationID: number;

  @Column({ type: 'bigint', name: 'MovementRecordingRef' })
  movementRecordingRef: number;

  @Column({ type: 'bigint', name: 'ProductionUnitComplementaryInformationRef' })
  productionUnitComplementaryInformationRef: number;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'bigint', name: 'ProductionUnitSectionRef', nullable: true })
  productionUnitSectionRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}