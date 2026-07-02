import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceListParameters' })
export class LegacyPriceListParameters {
  @PrimaryColumn({ type: 'bigint', name: 'PriceListParametersID' })
  priceListParametersID: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'integer', name: 'PriceListType' })
  priceListType: number;

  @Column({ type: 'integer', name: 'SalesDocumentType' })
  salesDocumentType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}