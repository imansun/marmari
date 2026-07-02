import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessEntityLock' })
export class LegacyProcessEntityLock {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessEntityLockID' })
  processEntityLockID: number;

  @Column({ type: 'uuid', name: 'InstanceId' })
  instanceId: string;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'EntityID' })
  entityID: number;

  @Column({ type: 'integer', name: 'LockType' })
  lockType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}