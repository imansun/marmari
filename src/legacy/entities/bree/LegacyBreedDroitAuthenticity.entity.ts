import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BreedDroitAuthenticity' })
export class LegacyBreedDroitAuthenticity {
  @PrimaryColumn({ type: 'bigint', name: 'BreedDroitAuthenticityID' })
  breedDroitAuthenticityID: number;

  @Column({ type: 'bigint', name: 'PersonelCodeRef', nullable: true })
  personelCodeRef: number | null;

  @Column({ type: 'character varying', name: 'PersonelDomesticName', nullable: true })
  personelDomesticName: string | null;

  @Column({ type: 'character varying', name: 'PersonelName', nullable: true })
  personelName: string | null;

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

}