import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TemporaryExitItem' })
export class LegacyTemporaryExitItem {
  @PrimaryColumn({ type: 'bigint', name: 'TemporaryExitItemID' })
  temporaryExitItemID: number;

  @Column({ type: 'bigint', name: 'TemporaryExitRef' })
  temporaryExitRef: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'bigint', name: 'CounterPartRef', nullable: true })
  counterPartRef: number | null;

  @Column({ type: 'character varying', name: 'Destination', nullable: true })
  destination: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ReturnDate', nullable: true })
  returnDate: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'boolean', name: 'IsReturn' })
  isReturn: boolean;

  @Column({ type: 'bigint', name: 'SettlementPlaceRef', nullable: true })
  settlementPlaceRef: number | null;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}