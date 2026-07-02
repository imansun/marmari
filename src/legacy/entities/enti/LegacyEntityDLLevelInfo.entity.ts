import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntityDLLevelInfo' })
export class LegacyEntityDLLevelInfo {
  @PrimaryColumn({ type: 'bigint', name: 'EntityDLLevelInfoID' })
  entityDLLevelInfoID: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'EntityRef' })
  entityRef: number;

  @Column({ type: 'bigint', name: 'DLRef1' })
  dLRef1: number;

  @Column({ type: 'bigint', name: 'DLRef2', nullable: true })
  dLRef2: number | null;

  @Column({ type: 'bigint', name: 'DLRef3', nullable: true })
  dLRef3: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}