import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ServiceOperationMaterial' })
export class LegacyServiceOperationMaterial {
  @PrimaryColumn({ type: 'bigint', name: 'ServiceOperationMaterialID' })
  serviceOperationMaterialID: number;

  @Column({ type: 'bigint', name: 'ServiceOperationRef' })
  serviceOperationRef: number;

  @Column({ type: 'integer', name: 'PartSelectionMethod' })
  partSelectionMethod: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

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