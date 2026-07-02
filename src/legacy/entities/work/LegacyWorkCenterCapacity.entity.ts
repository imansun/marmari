import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkCenterCapacity' })
export class LegacyWorkCenterCapacity {
  @PrimaryColumn({ type: 'bigint', name: 'WorkCenterCapacityID' })
  workCenterCapacityID: number;

  @Column({ type: 'bigint', name: 'WorkCenterRef' })
  workCenterRef: number;

  @Column({ type: 'bigint', name: 'CapacityTypeRef' })
  capacityTypeRef: number;

  @Column({ type: 'integer', name: 'CalculationType' })
  calculationType: number;

  @Column({ type: 'integer', name: 'AvailableCapacity' })
  availableCapacity: number;

  @Column({ type: 'bigint', name: 'ShiftGroupingRef', nullable: true })
  shiftGroupingRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'State' })
  state: number;

}