import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EndingMaterialWithReference' })
export class LegacyEndingMaterialWithReference {
  @PrimaryColumn({ type: 'bigint', name: 'EndingMaterialWithReferenceID' })
  endingMaterialWithReferenceID: number;

  @Column({ type: 'bigint', name: 'EndingMaterialRef' })
  endingMaterialRef: number;

  @Column({ type: 'bigint', name: 'ProductionRef' })
  productionRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}