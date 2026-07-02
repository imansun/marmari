import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Store' })
export class LegacyStore {
  @PrimaryColumn({ type: 'bigint', name: 'StoreID' })
  storeID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PartyRef', nullable: true })
  partyRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'boolean', name: 'IntermediateGroupMembership' })
  intermediateGroupMembership: boolean;

  @Column({ type: 'boolean', name: 'IsDisjoint' })
  isDisjoint: boolean;

  @Column({ type: 'integer', name: 'NoneCountable', nullable: true })
  noneCountable: number | null;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'character varying', name: 'GLN', nullable: true })
  gLN: string | null;

}