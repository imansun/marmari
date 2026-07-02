import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BreedDroitAuthenticityBstgan' })
export class LegacyBreedDroitAuthenticityBstgan {
  @PrimaryColumn({ type: 'bigint', name: 'BreedDroitAuthenticityBstganID' })
  breedDroitAuthenticityBstganID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'character varying', name: 'BstganName', nullable: true })
  bstganName: string | null;

  @Column({ type: 'character varying', name: 'BstganDomesticName', nullable: true })
  bstganDomesticName: string | null;

  @Column({ type: 'integer', name: 'Bearing', nullable: true })
  bearing: number | null;

  @Column({ type: 'character varying', name: 'NationalNo', nullable: true })
  nationalNo: string | null;

  @Column({ type: 'character varying', name: 'BirthCertificateNo', nullable: true })
  birthCertificateNo: string | null;

  @Column({ type: 'timestamp without time zone', name: 'BirthDate', nullable: true })
  birthDate: Date | null;

  @Column({ type: 'character varying', name: 'AcademicCutting', nullable: true })
  academicCutting: string | null;

  @Column({ type: 'character varying', name: 'AcademicState', nullable: true })
  academicState: string | null;

  @Column({ type: 'character varying', name: 'AnimalState', nullable: true })
  animalState: string | null;

  @Column({ type: 'bigint', name: 'PersonnelCodeRef', nullable: true })
  personnelCodeRef: number | null;

  @Column({ type: 'character varying', name: 'MaritalState', nullable: true })
  maritalState: string | null;

  @Column({ type: 'timestamp without time zone', name: 'AuthenticityCessationDate', nullable: true })
  authenticityCessationDate: Date | null;

  @Column({ type: 'character varying', name: 'FatherName', nullable: true })
  fatherName: string | null;

  @Column({ type: 'character varying', name: 'BirthCertificateEmissionSlot', nullable: true })
  birthCertificateEmissionSlot: string | null;

  @Column({ type: 'numeric', name: 'ContactNo', nullable: true })
  contactNo: number | null;

  @Column({ type: 'character varying', name: 'ShbaNo', nullable: true })
  shbaNo: string | null;

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