import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerChangeDetail' })
export class LegacyCustomerChangeDetail {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerChangeDetailID' })
  customerChangeDetailID: number;

  @Column({ type: 'bigint', name: 'CustomerChangeRef' })
  customerChangeRef: number;

  @Column({ type: 'character varying', name: 'PropertyName' })
  propertyName: string;

  @Column({ type: 'character varying', name: 'PropertyTitle', nullable: true })
  propertyTitle: string | null;

  @Column({ type: 'character varying', name: 'OldValue', nullable: true })
  oldValue: string | null;

  @Column({ type: 'character varying', name: 'NewValue', nullable: true })
  newValue: string | null;

  @Column({ type: 'character varying', name: 'OldValueName', nullable: true })
  oldValueName: string | null;

  @Column({ type: 'character varying', name: 'NewValueName', nullable: true })
  newValueName: string | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}