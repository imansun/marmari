import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EquipmentProblemGroup' })
export class LegacyEquipmentProblemGroup {
  @PrimaryColumn({ type: 'bigint', name: 'EquipmentProblemGroupID' })
  equipmentProblemGroupID: number;

  @Column({ type: 'bigint', name: 'EquipmentExtensionRef' })
  equipmentExtensionRef: number;

  @Column({ type: 'bigint', name: 'ProblemGroupRef' })
  problemGroupRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}