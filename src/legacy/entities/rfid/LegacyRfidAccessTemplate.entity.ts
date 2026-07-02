import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidAccessTemplate' })
export class LegacyRfidAccessTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'RfidAccessTemplateID' })
  rfidAccessTemplateID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}