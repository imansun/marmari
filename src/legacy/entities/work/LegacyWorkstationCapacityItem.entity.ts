import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkstationCapacityItem' })
export class LegacyWorkstationCapacityItem {
  @PrimaryColumn({ type: 'bigint', name: 'WorkstationCapacityItemID' })
  workstationCapacityItemID: number;

  @Column({ type: 'bigint', name: 'WorkstationCapacityRef' })
  workstationCapacityRef: number;

  @Column({ type: 'integer', name: 'Month', nullable: true })
  month: number | null;

  @Column({ type: 'numeric', name: 'LabourCapacity' })
  labourCapacity: number;

  @Column({ type: 'numeric', name: 'OverheadCapacity' })
  overheadCapacity: number;

  @Column({ type: 'numeric', name: 'ExpectedCapacity', nullable: true })
  expectedCapacity: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}