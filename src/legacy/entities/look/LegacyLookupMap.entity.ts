import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LookupMap' })
export class LegacyLookupMap {
  @PrimaryColumn({ type: 'bigint', name: 'LookupMapID' })
  lookupMapID: number;

  @Column({ type: 'bigint', name: 'LookupRef' })
  lookupRef: number;

  @Column({ type: 'bigint', name: 'StandardCode' })
  standardCode: number;

  @Column({ type: 'character varying', name: 'StandardTitle' })
  standardTitle: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}