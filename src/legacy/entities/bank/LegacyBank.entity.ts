import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Bank' })
export class LegacyBank {
  @PrimaryColumn({ type: 'bigint', name: 'BankID' })
  bankID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Name_En', nullable: true })
  nameEn: string | null;

  @Column({ type: 'character varying', name: 'Phone', nullable: true })
  phone: string | null;

  @Column({ type: 'character varying', name: 'WebSite', nullable: true })
  webSite: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'integer', name: 'BankType' })
  bankType: number;

  @Column({ type: 'character varying', name: 'SwiftCode', nullable: true })
  swiftCode: string | null;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}