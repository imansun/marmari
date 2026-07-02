import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerSalesArea' })
export class LegacyCustomerSalesArea {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerSalesAreaID' })
  customerSalesAreaID: number;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerGroupRef', nullable: true })
  customerGroupRef: number | null;

  @Column({ type: 'bigint', name: 'SalesAreaRef' })
  salesAreaRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}