import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaraProductGroup' })
export class LegacyTaraProductGroup {
  @PrimaryColumn({ type: 'bigint', name: 'TaraProductGroupID' })
  taraProductGroupID: number;

  @Column({ type: 'character varying', name: 'Tags', nullable: true })
  tags: string | null;

  @Column({ type: 'bigint', name: 'ExternalID' })
  externalID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}