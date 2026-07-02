import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerSalesOffice' })
export class LegacyCustomerSalesOffice {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerSalesOfficeID' })
  customerSalesOfficeID: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}