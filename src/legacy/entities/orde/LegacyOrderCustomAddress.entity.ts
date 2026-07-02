import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrderCustomAddress' })
export class LegacyOrderCustomAddress {
  @PrimaryColumn({ type: 'bigint', name: 'OrderCustomAddressID' })
  orderCustomAddressID: number;

  @Column({ type: 'bigint', name: 'OrderRef' })
  orderRef: number;

  @Column({ type: 'bigint', name: 'AddressRef' })
  addressRef: number;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'boolean', name: 'IsSelected' })
  isSelected: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}