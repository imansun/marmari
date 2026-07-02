import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ServiceGroup' })
export class LegacyServiceGroup {
  @PrimaryColumn({ type: 'bigint', name: 'ServiceGroupID' })
  serviceGroupID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}