import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldOperationsAcknowledge' })
export class LegacyHandheldOperationsAcknowledge {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldOperationsAcknowledgeID' })
  handheldOperationsAcknowledgeID: number;

  @Column({ type: 'uuid', name: 'GUID' })
  gUID: string;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'EntityRef' })
  entityRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}