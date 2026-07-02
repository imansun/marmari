import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BillOfMaterialMapItemRelatedOperation' })
export class LegacyBillOfMaterialMapItemRelatedOperation {
  @PrimaryColumn({ type: 'bigint', name: 'BillOfMaterialMapItemRelatedOperationID' })
  billOfMaterialMapItemRelatedOperationID: number;

  @Column({ type: 'bigint', name: 'BillOfMaterialMapItemRef' })
  billOfMaterialMapItemRef: number;

  @Column({ type: 'bigint', name: 'RoutingOperationRef' })
  routingOperationRef: number;

  @Column({ type: 'numeric', name: 'ScrapCompletePercentage' })
  scrapCompletePercentage: number;

  @Column({ type: 'numeric', name: 'ConversionRatio' })
  conversionRatio: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}