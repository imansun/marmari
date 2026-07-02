import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductListSalesOffice' })
export class LegacyProductListSalesOffice {
  @PrimaryColumn({ type: 'bigint', name: 'ProductListSalesOfficeID' })
  productListSalesOfficeID: number;

  @Column({ type: 'bigint', name: 'ProductListRef' })
  productListRef: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}