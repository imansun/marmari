import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxGroupingItem' })
export class LegacyTaxGroupingItem {
  @PrimaryColumn({ type: 'bigint', name: 'TaxGroupingItemID' })
  taxGroupingItemID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'TaxGroupingRef' })
  taxGroupingRef: number;

  @Column({ type: 'bigint', name: 'EntityGroupRef' })
  entityGroupRef: number;

  @Column({ type: 'numeric', name: 'TaxPercentAmount' })
  taxPercentAmount: number;

  @Column({ type: 'numeric', name: 'TollPercentAmount' })
  tollPercentAmount: number;

  @Column({ type: 'boolean', name: 'Refundable' })
  refundable: boolean;

}