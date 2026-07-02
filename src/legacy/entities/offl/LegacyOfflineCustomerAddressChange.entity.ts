import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OfflineCustomerAddressChange' })
export class LegacyOfflineCustomerAddressChange {
  @PrimaryColumn({ type: 'bigint', name: 'OfflineCustomerAddressChangeID' })
  offlineCustomerAddressChangeID: number;

  @Column({ type: 'bigint', name: 'CustomerChangeRef' })
  customerChangeRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Details' })
  details: string;

  @Column({ type: 'character varying', name: 'ZipCode', nullable: true })
  zipCode: string | null;

  @Column({ type: 'character varying', name: 'Phone' })
  phone: string;

  @Column({ type: 'character varying', name: 'Fax', nullable: true })
  fax: string | null;

  @Column({ type: 'character varying', name: 'Email', nullable: true })
  email: string | null;

  @Column({ type: 'bigint', name: 'RegionalDivisionRef' })
  regionalDivisionRef: number;

  @Column({ type: 'integer', name: 'CustomerAddressType' })
  customerAddressType: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'integer', name: 'ChangeType' })
  changeType: number;

  @Column({ type: 'bigint', name: 'AddressRef' })
  addressRef: number;

  @Column({ type: 'bigint', name: 'CustomerAddressRef' })
  customerAddressRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}