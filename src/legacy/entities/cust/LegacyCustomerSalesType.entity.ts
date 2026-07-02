import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerSalesType' })
export class LegacyCustomerSalesType {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerSalesTypeID' })
  customerSalesTypeID: number;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerGroupRef', nullable: true })
  customerGroupRef: number | null;

  @Column({ type: 'bigint', name: 'SalesTypeRef' })
  salesTypeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}