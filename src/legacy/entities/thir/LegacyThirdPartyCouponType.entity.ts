import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ThirdPartyCouponType' })
export class LegacyThirdPartyCouponType {
  @PrimaryColumn({ type: 'bigint', name: 'ThirdPartyCouponTypeID' })
  thirdPartyCouponTypeID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'ThirdPartyRef' })
  thirdPartyRef: number;

  @Column({ type: 'numeric', name: 'CommissionPercentage', nullable: true })
  commissionPercentage: number | null;

  @Column({ type: 'boolean', name: 'DivisablePerCustomer' })
  divisablePerCustomer: boolean;

  @Column({ type: 'boolean', name: 'IsDigital' })
  isDigital: boolean;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

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

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

}