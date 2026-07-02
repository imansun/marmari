import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MovementRecordingComplementaryInformationItem' })
export class LegacyMovementRecordingComplementaryInformationItem {
  @PrimaryColumn({ type: 'bigint', name: 'MovementRecordingComplementaryInformationItemID' })
  movementRecordingComplementaryInformationItemID: number;

  @Column({ type: 'bigint', name: 'MovementRecordingComplementaryInformationRef' })
  movementRecordingComplementaryInformationRef: number;

  @Column({ type: 'bigint', name: 'ProductionUnitComplementaryInformationItemRef' })
  productionUnitComplementaryInformationItemRef: number;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}