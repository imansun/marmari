import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationRunLowLevelCoding' })
export class LegacyCalculationRunLowLevelCoding {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationRunLowLevelCodingID' })
  calculationRunLowLevelCodingID: number;

  @Column({ type: 'bigint', name: 'CalculationRunBomRef' })
  calculationRunBomRef: number;

  @Column({ type: 'character varying', name: 'LowLevel', nullable: true })
  lowLevel: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'Order', nullable: true })
  order: number | null;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}