import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Seaport' })
export class LegacySeaport {
  @PrimaryColumn({ type: 'bigint', name: 'SeaportID' })
  seaportID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Name_En' })
  nameEn: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

}