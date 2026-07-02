import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ModularTopicParameter' })
export class LegacyModularTopicParameter {
  @PrimaryColumn({ type: 'bigint', name: 'ModularTopicParameterID' })
  modularTopicParameterID: number;

  @Column({ type: 'bigint', name: 'ModularTopicRef' })
  modularTopicRef: number;

  @Column({ type: 'integer', name: 'ParameterType' })
  parameterType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}