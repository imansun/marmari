import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VATBaseInformation' })
export class LegacyVATBaseInformation {
  @PrimaryColumn({ type: 'bigint', name: 'VATBaseInformationID' })
  vATBaseInformationID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'PartyRef', nullable: true })
  partyRef: number | null;

  @Column({ type: 'bigint', name: 'PartyAddressRef', nullable: true })
  partyAddressRef: number | null;

  @Column({ type: 'character varying', name: 'CompanyAddress', nullable: true })
  companyAddress: string | null;

  @Column({ type: 'character varying', name: 'EconomicCode' })
  economicCode: string;

  @Column({ type: 'character varying', name: 'RegistrationCode' })
  registrationCode: string;

  @Column({ type: 'character varying', name: 'TaxGeneralOffice' })
  taxGeneralOffice: string;

  @Column({ type: 'smallint', name: 'VATAuxiliaryNumber', nullable: true })
  vATAuxiliaryNumber: number | null;

  @Column({ type: 'character varying', name: 'ZIPCode' })
  zIPCode: string;

  @Column({ type: 'character varying', name: 'Phone' })
  phone: string;

  @Column({ type: 'character varying', name: 'FAX' })
  fAX: string;

  @Column({ type: 'character varying', name: 'AddressDetails' })
  addressDetails: string;

  @Column({ type: 'character varying', name: 'Name', nullable: true })
  name: string | null;

  @Column({ type: 'boolean', name: 'Active' })
  active: boolean;

  @Column({ type: 'smallint', name: 'BranchNumber', nullable: true })
  branchNumber: number | null;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Nationality', nullable: true })
  nationality: number | null;

  @Column({ type: 'character varying', name: 'TaxPayer', nullable: true })
  taxPayer: string | null;

  @Column({ type: 'character varying', name: 'UserName', nullable: true })
  userName: string | null;

  @Column({ type: 'character varying', name: 'MobileNumber', nullable: true })
  mobileNumber: string | null;

  @Column({ type: 'character varying', name: 'LocalCode', nullable: true })
  localCode: string | null;

  @Column({ type: 'integer', name: 'RegistrationStatus', nullable: true })
  registrationStatus: number | null;

  @Column({ type: 'bigint', name: 'SeasonalZoneRef', nullable: true })
  seasonalZoneRef: number | null;

  @Column({ type: 'character varying', name: 'NationalCode', nullable: true })
  nationalCode: string | null;

  @Column({ type: 'bigint', name: 'AdminstrationCode', nullable: true })
  adminstrationCode: number | null;

}