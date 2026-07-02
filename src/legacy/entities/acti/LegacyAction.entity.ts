import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Action' })
export class LegacyAction {
  @PrimaryColumn({ type: 'bigint', name: 'ActionID' })
  actionID: number;

  @Column({ type: 'bigint', name: 'TaskRef' })
  taskRef: number;

  @Column({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @Column({ type: 'text', name: 'Value' })
  value: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}