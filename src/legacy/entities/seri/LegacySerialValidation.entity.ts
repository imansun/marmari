import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialValidation' })
export class LegacySerialValidation {
  @PrimaryColumn({ type: 'bigint', name: 'SerialValidationID' })
  serialValidationID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}