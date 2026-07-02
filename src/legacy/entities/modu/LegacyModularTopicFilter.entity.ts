import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ModularTopicFilter' })
export class LegacyModularTopicFilter {
  @PrimaryColumn({ type: 'bigint', name: 'ModularTopicFilterID' })
  modularTopicFilterID: number;

  @Column({ type: 'bigint', name: 'ModularTopicRef' })
  modularTopicRef: number;

  @Column({ type: 'integer', name: 'CategoryType' })
  categoryType: number;

  @Column({ type: 'bigint', name: 'CategoryRef' })
  categoryRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}