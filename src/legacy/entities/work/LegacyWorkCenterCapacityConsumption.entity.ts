import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkCenterCapacityConsumption' })
export class LegacyWorkCenterCapacityConsumption {
  @PrimaryColumn({ type: 'bigint', name: 'WorkCenterCapacityConsumptionID' })
  workCenterCapacityConsumptionID: number;

  @Column({ type: 'bigint', name: 'WorkCenterCapacityRef' })
  workCenterCapacityRef: number;

  @Column({ type: 'bigint', name: 'StandardValueRef' })
  standardValueRef: number;

  @Column({ type: 'numeric', name: 'ConsumptionPercent' })
  consumptionPercent: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}