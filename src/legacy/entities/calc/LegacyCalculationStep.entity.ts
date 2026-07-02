import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationStep' })
export class LegacyCalculationStep {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationStepID' })
  calculationStepID: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'text', name: 'Config', nullable: true })
  config: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}