import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LookupTranslation' })
export class LegacyLookupTranslation {
  @Column({ type: 'bigint', name: 'LookupRef' })
  lookupRef: number;

  @Column({ type: 'character varying', name: 'Culture' })
  culture: string;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'bigint', name: 'LookupTranslationID' })
  lookupTranslationID: number;

}