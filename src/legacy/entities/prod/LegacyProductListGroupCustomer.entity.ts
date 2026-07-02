import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductListGroupCustomer' })
export class LegacyProductListGroupCustomer {
  @PrimaryColumn({ type: 'bigint', name: 'ProductListGroupCustomerID' })
  productListGroupCustomerID: number;

  @Column({ type: 'bigint', name: 'ProductListRef' })
  productListRef: number;

  @Column({ type: 'bigint', name: 'EntityGroupRef' })
  entityGroupRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}