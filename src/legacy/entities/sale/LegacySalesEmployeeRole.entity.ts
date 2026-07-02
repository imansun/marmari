import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesEmployeeRole' })
export class LegacySalesEmployeeRole {
  @PrimaryColumn({ type: 'bigint', name: 'SalesEmployeeRoleID' })
  salesEmployeeRoleID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'IsInternal' })
  isInternal: boolean;

  @Column({ type: 'integer', name: 'InternalRoleType', nullable: true })
  internalRoleType: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}