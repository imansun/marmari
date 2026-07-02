import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxGrouping' })
export class LegacyTaxGrouping {
  @PrimaryColumn({ type: 'bigint', name: 'TaxGroupingID' })
  taxGroupingID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'numeric', name: 'TaxPercentAmount', nullable: true })
  taxPercentAmount: number | null;

  @Column({ type: 'numeric', name: 'TollPercentAmount', nullable: true })
  tollPercentAmount: number | null;

  @Column({ type: 'boolean', name: 'Refundable' })
  refundable: boolean;

}