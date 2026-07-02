import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrganizationElement' })
export class LegacyOrganizationElement {
  @PrimaryColumn({ type: 'bigint', name: 'OrganizationElementID' })
  organizationElementID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'ElementType' })
  elementType: number;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}