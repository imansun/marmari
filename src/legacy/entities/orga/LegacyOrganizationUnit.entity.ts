import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrganizationUnit' })
export class LegacyOrganizationUnit {
  @PrimaryColumn({ type: 'bigint', name: 'OrganizationUnitID' })
  organizationUnitID: number;

  @Column({ type: 'integer', name: 'OrganizationUnitType' })
  organizationUnitType: number;

  @Column({ type: 'bigint', name: 'OrganizationElementRef' })
  organizationElementRef: number;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

}