import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntityGrouping' })
export class LegacyEntityGrouping {
  @PrimaryColumn({ type: 'bigint', name: 'EntityGroupingID' })
  entityGroupingID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'ComponentName' })
  componentName: string;

  @Column({ type: 'character varying', name: 'EntityName' })
  entityName: string;

  @Column({ type: 'character varying', name: 'SubtypeKey', nullable: true })
  subtypeKey: string | null;

  @Column({ type: 'character varying', name: 'SubtypeTitle', nullable: true })
  subtypeTitle: string | null;

  @Column({ type: 'boolean', name: 'IsDisjoint' })
  isDisjoint: boolean;

  @Column({ type: 'boolean', name: 'IsInternal' })
  isInternal: boolean;

  @Column({ type: 'boolean', name: 'IntermediateGroupMembershipEnabled' })
  intermediateGroupMembershipEnabled: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}