import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CouponAllocation' })
export class LegacyCouponAllocation {
  @PrimaryColumn({ type: 'bigint', name: 'CouponAllocationID' })
  couponAllocationID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'AllocationDate' })
  allocationDate: Date;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}