import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkOrderDamageReason' })
export class LegacyWorkOrderDamageReason {
  @PrimaryColumn({ type: 'bigint', name: 'WorkOrderDamageReasonID' })
  workOrderDamageReasonID: number;

  @Column({ type: 'bigint', name: 'WorkOrderDamageRef' })
  workOrderDamageRef: number;

  @Column({ type: 'bigint', name: 'DamageReasonGroupRef' })
  damageReasonGroupRef: number;

  @Column({ type: 'bigint', name: 'DamageReasonRef' })
  damageReasonRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}