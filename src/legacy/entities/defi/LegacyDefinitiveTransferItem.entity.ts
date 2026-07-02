import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DefinitiveTransferItem' })
export class LegacyDefinitiveTransferItem {
  @PrimaryColumn({ type: 'bigint', name: 'DefinitiveTransferItemID' })
  definitiveTransferItemID: number;

  @Column({ type: 'bigint', name: 'DefinitiveTransferRef' })
  definitiveTransferRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}