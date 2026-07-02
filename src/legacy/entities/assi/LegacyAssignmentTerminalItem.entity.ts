import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssignmentTerminalItem' })
export class LegacyAssignmentTerminalItem {
  @PrimaryColumn({ type: 'bigint', name: 'AssignmentTerminalItemID' })
  assignmentTerminalItemID: number;

  @Column({ type: 'bigint', name: 'AssignmentTerminalRef' })
  assignmentTerminalRef: number;

  @Column({ type: 'bigint', name: 'CarrierRef' })
  carrierRef: number;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}