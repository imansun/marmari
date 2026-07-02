import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessInstanceEntityReference' })
export class LegacyProcessInstanceEntityReference {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessInstanceEntityReferenceID' })
  processInstanceEntityReferenceID: number;

  @Column({ type: 'uuid', name: 'InstanceID' })
  instanceID: string;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'EntityRef' })
  entityRef: number;

}