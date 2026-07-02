import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartDetailFormulaItem' })
export class LegacyPartDetailFormulaItem {
  @PrimaryColumn({ type: 'bigint', name: 'PartDetailFormulaItemID' })
  partDetailFormulaItemID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PartDetailFormulaRef' })
  partDetailFormulaRef: number;

}