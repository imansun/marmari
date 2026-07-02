import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ModularTopic' })
export class LegacyModularTopic {
  @PrimaryColumn({ type: 'bigint', name: 'ModularTopicID' })
  modularTopicID: number;

  @Column({ type: 'bigint', name: 'TopicRef' })
  topicRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}