import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SecureFormalCodeSystem' })
export class LegacySecureFormalCodeSystem {
  @PrimaryColumn({ type: 'bigint', name: 'SecureFormalCodeSystemID' })
  secureFormalCodeSystemID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'CompanyName', nullable: true })
  companyName: string | null;

  @Column({ type: 'numeric', name: 'NationalEarmarkCode', nullable: true })
  nationalEarmarkCode: number | null;

  @Column({ type: 'numeric', name: 'CompetitiveCode', nullable: true })
  competitiveCode: number | null;

  @Column({ type: 'character varying', name: 'ActingKind', nullable: true })
  actingKind: string | null;

  @Column({ type: 'character varying', name: 'RegularPerson', nullable: true })
  regularPerson: string | null;

  @Column({ type: 'numeric', name: 'NationalCode', nullable: true })
  nationalCode: number | null;

  @Column({ type: 'character varying', name: 'ShbaNo', nullable: true })
  shbaNo: string | null;

  @Column({ type: 'numeric', name: 'Phone', nullable: true })
  phone: number | null;

  @Column({ type: 'numeric', name: 'AlongPhone', nullable: true })
  alongPhone: number | null;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate', nullable: true })
  requestDate: Date | null;

  @Column({ type: 'character varying', name: 'Address', nullable: true })
  address: string | null;

  @Column({ type: 'numeric', name: 'DegradationCode', nullable: true })
  degradationCode: number | null;

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

  @Column({ type: 'bigint', name: 'AccessionValenceInformation', nullable: true })
  accessionValenceInformation: number | null;

  @Column({ type: 'bigint', name: 'JuridicalPeopleInformationBase', nullable: true })
  juridicalPeopleInformationBase: number | null;

  @Column({ type: 'character varying', name: 'CorrelateHeyCompany', nullable: true })
  correlateHeyCompany: string | null;

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

  @Column({ type: 'character varying', name: 'AdviceAnnunciation', nullable: true })
  adviceAnnunciation: string | null;

  @Column({ type: 'character varying', name: 'NationEarmarkCode', nullable: true })
  nationEarmarkCode: string | null;

  @Column({ type: 'character varying', nullable: true })
  telePhone: string | null;

  @Column({ type: 'character varying', name: 'NationCode', nullable: true })
  nationCode: string | null;

  @Column({ type: 'character varying', name: 'IsAuthorshipFormalCode', nullable: true })
  isAuthorshipFormalCode: string | null;

}