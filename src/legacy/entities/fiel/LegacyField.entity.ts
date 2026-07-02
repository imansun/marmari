import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Field' })
export class LegacyField {
  @PrimaryColumn({ type: 'bigint', name: 'FieldID' })
  fieldID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Type' })
  type: string;

  @Column({ type: 'character varying', name: 'TypeMetadata', nullable: true })
  typeMetadata: string | null;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'integer', name: 'Index' })
  index: number;

  @Column({ type: 'boolean', name: 'IsRequired' })
  isRequired: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}