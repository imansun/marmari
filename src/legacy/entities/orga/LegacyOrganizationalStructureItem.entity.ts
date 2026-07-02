import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrganizationalStructureItem' })
export class LegacyOrganizationalStructureItem {
  @PrimaryColumn({ type: 'bigint', name: 'OrganizationalStructureItemID' })
  organizationalStructureItemID: number;

  @Column({ type: 'bigint', name: 'OrganizationalStructureRef' })
  organizationalStructureRef: number;

  @Column({ type: 'integer', name: 'OrganizationalStructurePostTypeCode', nullable: true })
  organizationalStructurePostTypeCode: number | null;

  @Column({ type: 'timestamp without time zone', name: 'InsertionDate' })
  insertionDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'DeletionDate', nullable: true })
  deletionDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}