import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ExitPermitItem' })
export class LegacyExitPermitItem {
  @PrimaryColumn({ type: 'bigint', name: 'ExitPermitItemID' })
  exitPermitItemID: number;

  @Column({ type: 'bigint', name: 'ExitPermitRef' })
  exitPermitRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}