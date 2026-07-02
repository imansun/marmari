import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ServiceEquipmentOperationActivity' })
export class LegacyServiceEquipmentOperationActivity {
  @PrimaryColumn({ type: 'bigint', name: 'ServiceEquipmentOperationActivityID' })
  serviceEquipmentOperationActivityID: number;

  @Column({ type: 'bigint', name: 'ServiceEquipmentRef' })
  serviceEquipmentRef: number;

  @Column({ type: 'bigint', name: 'ServiceOperationActivityRef' })
  serviceOperationActivityRef: number;

  @Column({ type: 'numeric', name: 'PeriodCheck', nullable: true })
  periodCheck: number | null;

  @Column({ type: 'integer', name: 'StartTime', nullable: true })
  startTime: number | null;

  @Column({ type: 'integer', name: 'EndTime', nullable: true })
  endTime: number | null;

  @Column({ type: 'integer', name: 'NegativeTolerance', nullable: true })
  negativeTolerance: number | null;

  @Column({ type: 'integer', name: 'PositiveTolerance', nullable: true })
  positiveTolerance: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}