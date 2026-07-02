import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerProduct' })
export class LegacyCustomerProduct {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerProductID' })
  customerProductID: number;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerGroupRef', nullable: true })
  customerGroupRef: number | null;

  @Column({ type: 'bigint', name: 'ProductRef', nullable: true })
  productRef: number | null;

  @Column({ type: 'bigint', name: 'ProductGroupRef', nullable: true })
  productGroupRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}