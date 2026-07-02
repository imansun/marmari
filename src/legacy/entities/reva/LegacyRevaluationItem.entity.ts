import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RevaluationItem' })
export class LegacyRevaluationItem {
  @PrimaryColumn({ type: 'bigint', name: 'RevaluationItemID' })
  revaluationItemID: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'numeric', name: 'RevaluatedBookValue' })
  revaluatedBookValue: number;

  @Column({ type: 'bigint', name: 'RevaluationRef' })
  revaluationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}