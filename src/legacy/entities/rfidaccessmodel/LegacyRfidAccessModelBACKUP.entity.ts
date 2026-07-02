import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidAccessModel_BACKUP' })
export class LegacyRfidAccessModelBACKUP {
  @PrimaryColumn({ type: 'bigint', name: 'RfidAccessModelID' })
  rfidAccessModelID: number;

  @PrimaryColumn({ type: 'character varying', name: 'Title' })
  title: string;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

}