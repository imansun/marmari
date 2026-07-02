import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceListConditionRow' })
export class LegacyPriceListConditionRow {
  @PrimaryColumn({ type: 'bigint', name: 'PriceListConditionRowID' })
  priceListConditionRowID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRef' })
  businessPolicyConditionRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef' })
  businessPolicyConditionRowRef: number;

  @Column({ type: 'bigint', name: 'PriceListRef' })
  priceListRef: number;

  @Column({ type: 'bigint', name: 'PriceListItemRef' })
  priceListItemRef: number;

  @Column({ type: 'bigint', name: 'PriceListResultRowRef', nullable: true })
  priceListResultRowRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}