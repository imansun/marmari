import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EliminationItem' })
export class LegacyEliminationItem {
  @PrimaryColumn({ type: 'bigint', name: 'EliminationItemID' })
  eliminationItemID: number;

  @Column({ type: 'bigint', name: 'EliminationRef' })
  eliminationRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'numeric', name: 'ExpenditureSide', nullable: true })
  expenditureSide: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'GasState', nullable: true })
  gasState: number | null;

}