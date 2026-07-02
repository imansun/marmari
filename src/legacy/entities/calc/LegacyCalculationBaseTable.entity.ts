import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationBaseTable' })
export class LegacyCalculationBaseTable {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationBaseTableID' })
  calculationBaseTableID: number;

  @Column({ type: 'bigint', name: 'CalculationBaseTableStructureRef' })
  calculationBaseTableStructureRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'timestamp without time zone', name: 'ActivationDate', nullable: true })
  activationDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}