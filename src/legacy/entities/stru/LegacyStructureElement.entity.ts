import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StructureElement' })
export class LegacyStructureElement {
  @PrimaryColumn({ type: 'bigint', name: 'StructureElementID' })
  structureElementID: number;

  @Column({ type: 'bigint', name: 'OrganizationElementRef', nullable: true })
  organizationElementRef: number | null;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

  @Column({ type: 'bigint', name: 'StructureVersionRef' })
  structureVersionRef: number;

  @Column({ type: 'bigint', name: 'StructureElementRef', nullable: true })
  structureElementRef: number | null;

  @Column({ type: 'bigint', name: 'OrganizationUnitRef' })
  organizationUnitRef: number;

  @Column({ type: 'bigint', name: 'ManagerPositionRef', nullable: true })
  managerPositionRef: number | null;

  @Column({ type: 'bigint', name: 'ManagerOrganizationUnitRef', nullable: true })
  managerOrganizationUnitRef: number | null;

}