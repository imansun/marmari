import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionOperationMaterial' })
export class LegacyInspectionOperationMaterial {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionOperationMaterialID' })
  inspectionOperationMaterialID: number;

  @Column({ type: 'bigint', name: 'InspectionOperationRef' })
  inspectionOperationRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'numeric', name: 'PlannedQuantity', nullable: true })
  plannedQuantity: number | null;

  @Column({ type: 'bigint', name: 'PartUnitRef', nullable: true })
  partUnitRef: number | null;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'CounterPartType' })
  counterPartType: number;

}