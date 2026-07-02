import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkOrderOperationActivity' })
export class LegacyWorkOrderOperationActivity {
  @PrimaryColumn({ type: 'bigint', name: 'WorkOrderOperationActivityID' })
  workOrderOperationActivityID: number;

  @Column({ type: 'bigint', name: 'WorkOrderOperationRef' })
  workOrderOperationRef: number;

  @Column({ type: 'integer', name: 'Number' })
  number: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'DefaultValue', nullable: true })
  defaultValue: string | null;

}