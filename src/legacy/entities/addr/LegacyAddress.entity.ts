import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Address' })
export class LegacyAddress {
  @PrimaryColumn({ type: 'bigint', name: 'AddressID' })
  addressID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Details' })
  details: string;

  @Column({ type: 'character varying', name: 'Details_EN', nullable: true })
  detailsEn: string | null;

  @Column({ type: 'character varying', name: 'ZipCode', nullable: true })
  zipCode: string | null;

  @Column({ type: 'character varying', name: 'Phone' })
  phone: string;

  @Column({ type: 'character varying', name: 'Fax', nullable: true })
  fax: string | null;

  @Column({ type: 'character varying', name: 'Email', nullable: true })
  email: string | null;

  @Column({ type: 'character varying', name: 'WebPage', nullable: true })
  webPage: string | null;

  @Column({ type: 'bigint', name: 'RegionalDivisionRef' })
  regionalDivisionRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'character varying', name: 'Latitude', nullable: true })
  latitude: string | null;

  @Column({ type: 'character varying', name: 'Longitude', nullable: true })
  longitude: string | null;

}