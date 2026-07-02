import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ActiveDirectoryGroupRelation' })
export class LegacyActiveDirectoryGroupRelation {
  @PrimaryColumn({ type: 'bigint', name: 'ActiveDirectoryGroupRelationID' })
  activeDirectoryGroupRelationID: number;

  @Column({ type: 'bigint', name: 'GroupRef' })
  groupRef: number;

  @Column({ type: 'character', name: 'NativeGuid' })
  nativeGuid: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}