import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GeneralPackageDependency' })
export class LegacyGeneralPackageDependency {
  @PrimaryColumn({ type: 'bigint', name: 'GeneralPackageDependencyID' })
  generalPackageDependencyID: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}