import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MedicalGenericSpec' })
export class LegacyMedicalGenericSpec {
  @PrimaryColumn({ type: 'bigint', name: 'MedicalGenericSpecID' })
  medicalGenericSpecID: number;

  @Column({ type: 'character varying', name: 'GenericCode' })
  genericCode: string;

  @Column({ type: 'character varying', name: 'GenericName' })
  genericName: string;

  @Column({ type: 'character varying', name: 'GenericDescription', nullable: true })
  genericDescription: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}