import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationTableBodyRow' })
export class LegacyCalculationTableBodyRow {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationTableBodyRowID' })
  calculationTableBodyRowID: number;

  @Column({ type: 'bigint', name: 'CalculationTableBodyRef' })
  calculationTableBodyRef: number;

  @Column({ type: 'bigint', name: 'EntityRef1', nullable: true })
  entityRef1: number | null;

  @Column({ type: 'bigint', name: 'EntityRef2', nullable: true })
  entityRef2: number | null;

  @Column({ type: 'bigint', name: 'EntityRef3', nullable: true })
  entityRef3: number | null;

  @Column({ type: 'bigint', name: 'EntityRef4', nullable: true })
  entityRef4: number | null;

  @Column({ type: 'bigint', name: 'EntityRef5', nullable: true })
  entityRef5: number | null;

  @Column({ type: 'bigint', name: 'EntityRef6', nullable: true })
  entityRef6: number | null;

  @Column({ type: 'bigint', name: 'EntityRef7', nullable: true })
  entityRef7: number | null;

  @Column({ type: 'bigint', name: 'EntityRef8', nullable: true })
  entityRef8: number | null;

  @Column({ type: 'integer', name: 'Lookup1', nullable: true })
  lookup1: number | null;

  @Column({ type: 'integer', name: 'Lookup2', nullable: true })
  lookup2: number | null;

  @Column({ type: 'integer', name: 'Lookup3', nullable: true })
  lookup3: number | null;

  @Column({ type: 'numeric', name: 'StaticData1', nullable: true })
  staticData1: number | null;

  @Column({ type: 'numeric', name: 'StaticData2', nullable: true })
  staticData2: number | null;

  @Column({ type: 'numeric', name: 'StaticData3', nullable: true })
  staticData3: number | null;

  @Column({ type: 'numeric', name: 'Output1', nullable: true })
  output1: number | null;

  @Column({ type: 'numeric', name: 'Output2', nullable: true })
  output2: number | null;

  @Column({ type: 'numeric', name: 'Output3', nullable: true })
  output3: number | null;

  @Column({ type: 'numeric', name: 'Output4', nullable: true })
  output4: number | null;

  @Column({ type: 'numeric', name: 'Output5', nullable: true })
  output5: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}