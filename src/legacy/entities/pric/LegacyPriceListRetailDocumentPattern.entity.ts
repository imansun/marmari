import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceListRetailDocumentPattern' })
export class LegacyPriceListRetailDocumentPattern {
  @PrimaryColumn({ type: 'bigint', name: 'PriceListRetailDocumentPatternID' })
  priceListRetailDocumentPatternID: number;

  @Column({ type: 'bigint', name: 'PriceListRef' })
  priceListRef: number;

  @Column({ type: 'integer', name: 'RetailDocumentPatternType' })
  retailDocumentPatternType: number;

  @Column({ type: 'bigint', name: 'RetailDocumentPatternRef', nullable: true })
  retailDocumentPatternRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}