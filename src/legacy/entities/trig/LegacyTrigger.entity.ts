import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Trigger' })
export class LegacyTrigger {
  @PrimaryColumn({ type: 'bigint', name: 'TriggerID' })
  triggerID: number;

  @Column({ type: 'bigint', name: 'TaskRef' })
  taskRef: number;

  @Column({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @Column({ type: 'character varying', name: 'TypeName' })
  typeName: string;

  @Column({ type: 'timestamp without time zone', name: 'Start' })
  start: Date;

  @Column({ type: 'timestamp without time zone', name: 'End', nullable: true })
  end: Date | null;

  @Column({ type: 'text', name: 'Value' })
  value: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}