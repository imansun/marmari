import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FileCalcItem' })
export class LegacyFileCalcItem {
  @PrimaryColumn({ type: 'bigint', name: 'FileCalcItemID' })
  fileCalcItemID: number;

  @Column({ type: 'bigint', name: 'FileCalcRef' })
  fileCalcRef: number;

  @Column({ type: 'bigint', name: 'FileStructureFieldRef' })
  fileStructureFieldRef: number;

  @Column({ type: 'integer', name: 'ApplyYearMonth' })
  applyYearMonth: number;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}