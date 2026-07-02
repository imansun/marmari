import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EngineeringPartStorePriorityExtension' })
export class LegacyEngineeringPartStorePriorityExtension {
  @PrimaryColumn({ type: 'bigint', name: 'EngineeringPartStorePriorityExtensionID' })
  engineeringPartStorePriorityExtensionID: number;

  @Column({ type: 'bigint', name: 'EngineeringPartExtensionRef' })
  engineeringPartExtensionRef: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

}