import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrganizationalStructure' })
export class LegacyOrganizationalStructure {
  @PrimaryColumn({ type: 'bigint', name: 'OrganizationalStructureID' })
  organizationalStructureID: number;

  @Column({ type: 'bigint', name: 'DepartmentRef' })
  departmentRef: number;

  @Column({ type: 'bigint', name: 'PostRef', nullable: true })
  postRef: number | null;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'InsertionDate' })
  insertionDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'DeletionDate', nullable: true })
  deletionDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}