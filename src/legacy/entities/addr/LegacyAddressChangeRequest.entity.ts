import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AddressChangeRequest' })
export class LegacyAddressChangeRequest {
  @PrimaryColumn({ type: 'bigint', name: 'AddressChangeRequestID' })
  addressChangeRequestID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'bigint', name: 'RegionalDivisionRef' })
  regionalDivisionRef: number;

  @Column({ type: 'character varying', name: 'Details' })
  details: string;

  @Column({ type: 'character varying', name: 'ZipCode', nullable: true })
  zipCode: string | null;

  @Column({ type: 'character varying', name: 'Phone' })
  phone: string;

  @Column({ type: 'boolean', name: 'IsMainAddress' })
  isMainAddress: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'EmployeeInfoChangeRequestRef' })
  employeeInfoChangeRequestRef: number;

  @Column({ type: 'bigint', name: 'AddressRef' })
  addressRef: number;

  @Column({ type: 'integer', name: 'ActionType' })
  actionType: number;

}