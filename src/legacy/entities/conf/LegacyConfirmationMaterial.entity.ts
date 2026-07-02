import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationMaterial' })
export class LegacyConfirmationMaterial {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationMaterialID' })
  confirmationMaterialID: number;

  @Column({ type: 'bigint', name: 'WorkOrderOperationMaterialRef', nullable: true })
  workOrderOperationMaterialRef: number | null;

  @Column({ type: 'bigint', name: 'ConfirmationRef' })
  confirmationRef: number;

  @Column({ type: 'integer', name: 'PartSelectionMethod' })
  partSelectionMethod: number;

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