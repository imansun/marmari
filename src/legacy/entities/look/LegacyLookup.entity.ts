import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Lookup' })
export class LegacyLookup {
  @PrimaryColumn({ type: 'bigint', name: 'LookupID' })
  lookupID: number;

  @Column({ type: 'character varying', name: 'Type' })
  type: string;

  @Column({ type: 'integer', name: 'Code' })
  code: number;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'integer', name: 'DisplayOrder', nullable: true })
  displayOrder: number | null;

  @Column({ type: 'character varying', name: 'Extra', nullable: true })
  extra: string | null;

  @Column({ type: 'character varying', name: 'System' })
  system: string;

  @Column({ type: 'boolean', name: 'CanEdit', default: false })
  canEdit: boolean;

  @Column({ type: 'boolean', name: 'CanDelete', default: false })
  canDelete: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}