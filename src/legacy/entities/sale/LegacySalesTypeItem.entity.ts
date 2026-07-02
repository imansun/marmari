import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesTypeItem' })
export class LegacySalesTypeItem {
  @PrimaryColumn({ type: 'bigint', name: 'SalesTypeItemID' })
  salesTypeItemID: number;

  @Column({ type: 'bigint', name: 'SalesTypeRef' })
  salesTypeRef: number;

  @Column({ type: 'bigint', name: 'AccountTypeRef' })
  accountTypeRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}