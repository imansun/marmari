import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CodeGroupCounter' })
export class LegacyCodeGroupCounter {
  @PrimaryColumn({ type: 'bigint', name: 'CodeGroupCounterID' })
  codeGroupCounterID: number;

  @Column({ type: 'bigint', name: 'CodeTemplateRef' })
  codeTemplateRef: number;

  @Column({ type: 'bigint', name: 'EntityGroupRef' })
  entityGroupRef: number;

  @Column({ type: 'bigint', name: 'LastCounter' })
  lastCounter: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}