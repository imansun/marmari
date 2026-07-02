import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionDocumentRules' })
export class LegacyInspectionDocumentRules {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionDocumentRulesID' })
  inspectionDocumentRulesID: number;

  @Column({ type: 'boolean', name: 'AbilityToSpecifySampleValue', nullable: true })
  abilityToSpecifySampleValue: boolean | null;

  @Column({ type: 'boolean', name: 'AbilityToSpecifyValue', nullable: true })
  abilityToSpecifyValue: boolean | null;

  @Column({ type: 'smallint', name: 'InspectionDocumentType' })
  inspectionDocumentType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'AutoFillAcceptedValue', nullable: true })
  autoFillAcceptedValue: boolean | null;

}