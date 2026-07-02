import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionOperationActivity' })
export class LegacyInspectionOperationActivity {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionOperationActivityID' })
  inspectionOperationActivityID: number;

  @Column({ type: 'bigint', name: 'InspectionOperationRef' })
  inspectionOperationRef: number;

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

}