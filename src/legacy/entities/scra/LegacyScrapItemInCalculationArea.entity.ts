import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ScrapItemInCalculationArea' })
export class LegacyScrapItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'ScrapItemInCalculationAreaID' })
  scrapItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bigint', name: 'ScrapItemRef' })
  scrapItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'boolean', name: 'IsReturn' })
  isReturn: boolean;

  @Column({ type: 'numeric', name: 'ScrapLoss', nullable: true })
  scrapLoss: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}