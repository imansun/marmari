import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductListCustomer' })
export class LegacyProductListCustomer {
  @PrimaryColumn({ type: 'bigint', name: 'ProductListCustomerID' })
  productListCustomerID: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bigint', name: 'ProductListRef' })
  productListRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}