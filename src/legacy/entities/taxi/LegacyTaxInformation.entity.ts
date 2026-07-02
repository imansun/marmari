import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxInformation' })
export class LegacyTaxInformation {
  @PrimaryColumn({ type: 'bigint', name: 'TaxInformationID' })
  taxInformationID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

  @Column({ type: 'numeric', name: 'SmallDealsQuorum' })
  smallDealsQuorum: number;

  @Column({ type: 'numeric', name: 'SmallDealsMergeRate' })
  smallDealsMergeRate: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}