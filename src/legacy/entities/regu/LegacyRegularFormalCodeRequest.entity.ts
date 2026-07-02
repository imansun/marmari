import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RegularFormalCodeRequest' })
export class LegacyRegularFormalCodeRequest {
  @PrimaryColumn({ type: 'bigint', name: 'RegularFormalCodeRequestID' })
  regularFormalCodeRequestID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate', nullable: true })
  requestDate: Date | null;

  @Column({ type: 'character varying', name: 'Name', nullable: true })
  name: string | null;

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

  @Column({ type: 'character varying', name: 'NationCode', nullable: true })
  nationCode: string | null;

  @Column({ type: 'character varying', nullable: true })
  telePhone: string | null;

  @Column({ type: 'character varying', nullable: true })
  celPhone: string | null;

  @Column({ type: 'character varying', name: 'IsAuthorshipFormalCode', nullable: true })
  isAuthorshipFormalCode: string | null;

  @Column({ type: 'character varying', name: 'OutletCompanyName', nullable: true })
  outletCompanyName: string | null;

}