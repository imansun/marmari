import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidAccessModel' })
export class LegacyRfidAccessModel {
  @PrimaryColumn({ type: 'bigint', name: 'RfidAccessModelID' })
  rfidAccessModelID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}