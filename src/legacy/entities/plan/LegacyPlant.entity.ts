import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Plant' })
export class LegacyPlant {
  @PrimaryColumn({ type: 'bigint', name: 'PlantID' })
  plantID: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'LatinName', nullable: true })
  latinName: string | null;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'AddressRef' })
  addressRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}