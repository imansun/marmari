import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceListParametersItem' })
export class LegacyPriceListParametersItem {
  @PrimaryColumn({ type: 'bigint', name: 'PriceListParametersItemID' })
  priceListParametersItemID: number;

  @Column({ type: 'bigint', name: 'PriceListParametersRef' })
  priceListParametersRef: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyParameterRef' })
  businessPolicyParameterRef: number;

  @Column({ type: 'boolean', name: 'IsStatic' })
  isStatic: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}