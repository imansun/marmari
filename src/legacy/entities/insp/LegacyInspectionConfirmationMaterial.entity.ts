import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionConfirmationMaterial' })
export class LegacyInspectionConfirmationMaterial {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionConfirmationMaterialID' })
  inspectionConfirmationMaterialID: number;

  @Column({ type: 'bigint', name: 'InspectionOperationMaterialRef', nullable: true })
  inspectionOperationMaterialRef: number | null;

  @Column({ type: 'bigint', name: 'InspectionConfirmationRef' })
  inspectionConfirmationRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'RealQuantity' })
  realQuantity: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'CounterPartType' })
  counterPartType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}