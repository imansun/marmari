import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartDetailFormula' })
export class LegacyPartDetailFormula {
  @PrimaryColumn({ type: 'bigint', name: 'PartDetailFormulaID' })
  partDetailFormulaID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PartDetailRef' })
  partDetailRef: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'boolean', name: 'CanInsertTrackingFactor' })
  canInsertTrackingFactor: boolean;

}