import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LookupInfo' })
export class LegacyLookupInfo {
  @PrimaryColumn({ type: 'bigint', name: 'LookupInfoID' })
  lookupInfoID: number;

  @Column({ type: 'character varying', name: 'Type' })
  type: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'IsDynamic', default: false })
  isDynamic: boolean;

  @Column({ type: 'uuid', name: 'Guid', nullable: true })
  guid: string | null;

  @Column({ type: 'integer', name: 'PackageVersion', nullable: true })
  packageVersion: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate', nullable: true })
  creationDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}