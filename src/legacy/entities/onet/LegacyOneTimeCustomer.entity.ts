import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OneTimeCustomer' })
export class LegacyOneTimeCustomer {
  @PrimaryColumn({ type: 'bigint', name: 'OneTimeCustomerID' })
  oneTimeCustomerID: number;

  @Column({ type: 'character varying', name: 'FirstName' })
  firstName: string;

  @Column({ type: 'character varying', name: 'LastName' })
  lastName: string;

  @Column({ type: 'character varying', name: 'PhoneNumber' })
  phoneNumber: string;

  @Column({ type: 'character varying', name: 'Address' })
  address: string;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'DeclarationDate' })
  declarationDate: Date;

  @Column({ type: 'bigint', name: 'OwnerSalesOfficeRef', nullable: true })
  ownerSalesOfficeRef: number | null;

  @Column({ type: 'character varying', name: 'NationalID', nullable: true })
  nationalID: string | null;

  @Column({ type: 'bigint', name: 'RegionalDivisionRef', nullable: true })
  regionalDivisionRef: number | null;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

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

  @Column({ type: 'character varying', name: 'FidaRegistration', nullable: true })
  fidaRegistration: string | null;

  @Column({ type: 'character varying', name: 'PostalCode', nullable: true })
  postalCode: string | null;

}