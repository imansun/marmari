import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrganizationType' })
export class LegacyOrganizationType {
  @PrimaryColumn({ type: 'bigint', name: 'OrganizationTypeID' })
  organizationTypeID: number;

  @Column({ type: 'character varying', name: 'Name', nullable: true })
  name: string | null;

}