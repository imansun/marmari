import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OperationalConsumptionQuantityFactorProperty' })
export class LegacyOperationalConsumptionQuantityFactorProperty {
  @PrimaryColumn({ type: 'bigint', name: 'OperationalConsumptionQuantityFactorPropertyID' })
  operationalConsumptionQuantityFactorPropertyID: number;

  @Column({ type: 'bigint', name: 'OperationalConsumptionQuantityFactorRef' })
  operationalConsumptionQuantityFactorRef: number;

  @Column({ type: 'bigint', name: 'FeedRef' })
  feedRef: number;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bigint', name: 'FormulaRef', nullable: true })
  formulaRef: number | null;

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