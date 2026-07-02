import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomersFormalCodeRequestSystem' })
export class LegacyCustomersFormalCodeRequestSystem {
  @PrimaryColumn({ type: 'bigint', name: 'CustomersFormalCodeRequestSystemID' })
  customersFormalCodeRequestSystemID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate', nullable: true })
  requestDate: Date | null;

  @Column({ type: 'character varying', name: 'CompanyPersonName', nullable: true })
  companyPersonName: string | null;

  @Column({ type: 'character varying', name: 'DomesticName', nullable: true })
  domesticName: string | null;

  @Column({ type: 'numeric', name: 'NationalCode', nullable: true })
  nationalCode: number | null;

  @Column({ type: 'numeric', name: 'Phone', nullable: true })
  phone: number | null;

  @Column({ type: 'numeric', name: 'AlongPhone', nullable: true })
  alongPhone: number | null;

  @Column({ type: 'character varying', name: 'Address', nullable: true })
  address: string | null;

  @Column({ type: 'numeric', name: 'DegradationCode', nullable: true })
  degradationCode: number | null;

  @Column({ type: 'bigint', name: 'AccessionValenceInformation', nullable: true })
  accessionValenceInformation: number | null;

  @Column({ type: 'bigint', name: 'AvocationImmunityFan', nullable: true })
  avocationImmunityFan: number | null;

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

  @Column({ type: 'numeric', name: 'BusinessCompetitiveCode', nullable: true })
  businessCompetitiveCode: number | null;

  @Column({ type: 'boolean', name: 'KharjyCustomer', nullable: true })
  kharjyCustomer: boolean | null;

  @Column({ type: 'character varying', name: 'AdviceAnnunciation', nullable: true })
  adviceAnnunciation: string | null;

  @Column({ type: 'character varying', name: 'PurchaseKind', nullable: true })
  purchaseKind: string | null;

  @Column({ type: 'character varying', name: 'PurchaseBar', nullable: true })
  purchaseBar: string | null;

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

  @Column({ type: 'character varying', name: 'NationalCod', nullable: true })
  nationalCod: string | null;

  @Column({ type: 'character varying', nullable: true })
  telePhone: string | null;

  @Column({ type: 'character varying', nullable: true })
  celPhone: string | null;

  @Column({ type: 'character varying', name: 'IsAuthorshipFormalCode', nullable: true })
  isAuthorshipFormalCode: string | null;

  @Column({ type: 'character varying', name: 'SupplementalNzrat', nullable: true })
  supplementalNzrat: string | null;

}