import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'QuotationExtension' })
export class LegacyQuotationExtension {
  @PrimaryColumn({ type: 'bigint', name: 'QuotationExtensionID' })
  quotationExtensionID: number;

  @Column({ type: 'bigint', name: 'QuotationRef' })
  quotationRef: number;

  @Column({ type: 'numeric', name: 'Tax' })
  tax: number;

  @Column({ type: 'numeric', name: 'Duty' })
  duty: number;

  @Column({ type: 'numeric', name: 'Discount' })
  discount: number;

  @Column({ type: 'numeric', name: 'TransportationCost' })
  transportationCost: number;

  @Column({ type: 'timestamp without time zone', name: 'QuotationDate' })
  quotationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}