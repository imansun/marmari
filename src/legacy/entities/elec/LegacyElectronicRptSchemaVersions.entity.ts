import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ElectronicRptSchemaVersions' })
export class LegacyElectronicRptSchemaVersions {
  @PrimaryColumn({ type: 'character varying', name: 'Version' })
  version: string;

  @Column({ type: 'timestamp without time zone', name: 'AppliedDate' })
  appliedDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

}