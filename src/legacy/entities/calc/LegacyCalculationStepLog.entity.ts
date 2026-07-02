import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationStepLog' })
export class LegacyCalculationStepLog {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationStepLogID' })
  calculationStepLogID: number;

  @Column({ type: 'bigint', name: 'CalculationStepRef', nullable: true })
  calculationStepRef: number | null;

  @Column({ type: 'bigint', name: 'CalculationLogCatalogRef', nullable: true })
  calculationLogCatalogRef: number | null;

  @Column({ type: 'bigint', name: 'JobRef' })
  jobRef: number;

  @Column({ type: 'boolean', name: 'IsLast' })
  isLast: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'bigint', name: 'RootRef', nullable: true })
  rootRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StartTime' })
  startTime: Date;

  @Column({ type: 'timestamp without time zone', name: 'FinishTime', nullable: true })
  finishTime: Date | null;

  @Column({ type: 'character varying', name: 'Message' })
  message: string;

  @Column({ type: 'character varying', name: 'Exception', nullable: true })
  exception: string | null;

  @Column({ type: 'bytea', name: 'Data', nullable: true })
  data: Buffer | null;

  @Column({ type: 'character varying', name: 'Type', nullable: true })
  type: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}