import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationTableBody' })
export class LegacyCalculationTableBody {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationTableBodyID' })
  calculationTableBodyID: number;

  @Column({ type: 'bigint', name: 'CalculationBaseTableStructureRef' })
  calculationBaseTableStructureRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'CalculationPeriodRef', nullable: true })
  calculationPeriodRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}