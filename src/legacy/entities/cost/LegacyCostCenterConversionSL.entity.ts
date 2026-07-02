import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CostCenterConversionSL' })
export class LegacyCostCenterConversionSL {
  @PrimaryColumn({ type: 'bigint', name: 'CostCenterConversionSLID' })
  costCenterConversionSLID: number;

  @Column({ type: 'bigint', name: 'CostCenterExRef' })
  costCenterExRef: number;

  @Column({ type: 'bigint', name: 'ConversionSLRef' })
  conversionSLRef: number;

  @Column({ type: 'bigint', name: 'SecondCostDriverRef', nullable: true })
  secondCostDriverRef: number | null;

  @Column({ type: 'numeric', name: 'FixPercentage' })
  fixPercentage: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}