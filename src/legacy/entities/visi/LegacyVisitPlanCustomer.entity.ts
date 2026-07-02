import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VisitPlanCustomer' })
export class LegacyVisitPlanCustomer {
  @PrimaryColumn({ type: 'bigint', name: 'VisitPlanCustomerID' })
  visitPlanCustomerID: number;

  @Column({ type: 'bigint', name: 'VisitPlanRef' })
  visitPlanRef: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'CustomerAddressRef', nullable: true })
  customerAddressRef: number | null;

}