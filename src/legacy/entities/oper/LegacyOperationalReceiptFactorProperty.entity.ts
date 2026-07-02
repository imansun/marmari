import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OperationalReceiptFactorProperty' })
export class LegacyOperationalReceiptFactorProperty {
  @PrimaryColumn({ type: 'bigint', name: 'OperationalReceiptFactorPropertyID' })
  operationalReceiptFactorPropertyID: number;

  @Column({ type: 'bigint', name: 'OperationalReceiptFactorRef' })
  operationalReceiptFactorRef: number;

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