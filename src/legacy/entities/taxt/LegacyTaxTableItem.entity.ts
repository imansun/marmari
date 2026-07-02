import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxTableItem' })
export class LegacyTaxTableItem {
  @PrimaryColumn({ type: 'bigint', name: 'TaxTableItemID' })
  taxTableItemID: number;

  @Column({ type: 'bigint', name: 'TaxTableRef' })
  taxTableRef: number;

  @Column({ type: 'numeric', name: 'FromValue' })
  fromValue: number;

  @Column({ type: 'numeric', name: 'ToValue' })
  toValue: number;

  @Column({ type: 'double precision', name: 'Coefficient' })
  coefficient: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}