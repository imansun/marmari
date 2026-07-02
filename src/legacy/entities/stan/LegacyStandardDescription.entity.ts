import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StandardDescription' })
export class LegacyStandardDescription {
  @PrimaryColumn({ type: 'bigint', name: 'StandardDescriptionID' })
  standardDescriptionID: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'integer', name: 'EntityCode', nullable: true })
  entityCode: number | null;

  @Column({ type: 'character varying', name: 'Discriminator', nullable: true })
  discriminator: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}