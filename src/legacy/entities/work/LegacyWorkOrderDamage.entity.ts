import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkOrderDamage' })
export class LegacyWorkOrderDamage {
  @PrimaryColumn({ type: 'bigint', name: 'WorkOrderDamageID' })
  workOrderDamageID: number;

  @Column({ type: 'bigint', name: 'WorkOrderRef' })
  workOrderRef: number;

  @Column({ type: 'bigint', name: 'DamageGroupRef' })
  damageGroupRef: number;

  @Column({ type: 'bigint', name: 'DamageRef' })
  damageRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}