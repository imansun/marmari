import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessServiceConsumerRelation' })
export class LegacyProcessServiceConsumerRelation {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessServiceConsumerRelationID' })
  processServiceConsumerRelationID: number;

  @Column({ type: 'bigint', name: 'ProcessServiceContractRef' })
  processServiceContractRef: number;

  @Column({ type: 'bigint', name: 'ProcessServiceConsumerRef' })
  processServiceConsumerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}