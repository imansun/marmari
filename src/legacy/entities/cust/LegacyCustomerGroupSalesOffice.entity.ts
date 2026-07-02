import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerGroupSalesOffice' })
export class LegacyCustomerGroupSalesOffice {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerGroupSalesOfficeID' })
  customerGroupSalesOfficeID: number;

  @Column({ type: 'bigint', name: 'CustomerGroupRef' })
  customerGroupRef: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}