import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrganizationalStructureParentLevelHierarchy' })
export class LegacyOrganizationalStructureParentLevelHierarchy {
  @PrimaryColumn({ type: 'bigint', name: 'OrganizationalStructureID' })
  organizationalStructureID: number;

  @PrimaryColumn({ type: 'integer', name: 'ParentManagementLevelCode' })
  parentManagementLevelCode: number | null;

  @PrimaryColumn({ type: 'integer', name: 'ManagementLevelCode' })
  managementLevelCode: number | null;

  @PrimaryColumn({ type: 'integer', name: 'Level' })
  level: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DepartmentLevel' })
  departmentLevel: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'PostLevel' })
  postLevel: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'PostRef' })
  postRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DepartmentRef' })
  departmentRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'ParentPostRef' })
  parentPostRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'ParentDepartmentRef' })
  parentDepartmentRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'StructureNodeType' })
  structureNodeType: number;

}