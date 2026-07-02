import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BankBranch' })
export class LegacyBankBranch {
  @PrimaryColumn({ type: 'bigint', name: 'BankBranchID' })
  bankBranchID: number;

  @Column({ type: 'bigint', name: 'BankRef' })
  bankRef: number;

  @Column({ type: 'bigint', name: 'CityRef', nullable: true })
  cityRef: number | null;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Name_En', nullable: true })
  nameEn: string | null;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Phone', nullable: true })
  phone: string | null;

  @Column({ type: 'character varying', name: 'Address', nullable: true })
  address: string | null;

  @Column({ type: 'character varying', name: 'WebSite', nullable: true })
  webSite: string | null;

  @Column({ type: 'character varying', name: 'SwiftCode', nullable: true })
  swiftCode: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'CityName', nullable: true })
  cityName: string | null;

}