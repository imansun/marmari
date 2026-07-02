import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessRepository' })
export class LegacyProcessRepository {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessRepositoryID' })
  processRepositoryID: number;

  @Column({ type: 'character varying', name: 'Data' })
  data: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}